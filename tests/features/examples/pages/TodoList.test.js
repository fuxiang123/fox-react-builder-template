import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TodoList from "../../../../src/features/examples/pages/TodoList";

beforeEach(() => {
  render(<TodoList />);
});

describe("examples/RedditListPage", () => {
  it("未输入待办事项，window.alert被调用", () => {
    window.alert = jest.fn();
    userEvent.click(screen.getByText("添加"));
    expect(window.alert).toBeCalledWith("请输入待办事项");
    window.alert.mockClear();
  });
  it("添加两个item", async () => {
    userEvent.type(
      screen.getByRole("textbox"),
      "todoItem1"
    );
    userEvent.click(screen.getByText("添加"));
    userEvent.type(screen.getByRole("textbox"), "23");
    userEvent.click(screen.getByText("添加"));
    const list = await screen.findAllByRole("listitem");
    expect(list[0].children[0].textContent).toEqual(
      "todoItem1"
    );
    expect(list[1].children[0].textContent).toEqual(
      "todoItem123"
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("改变item状态", async () => {
    const items = screen.getAllByRole("listitem");
    const firstItem = items[0].children[0];
    firstItem.click();
    expect(firstItem.className).toEqual("todo-finished");
    firstItem.click();
    expect(firstItem.className).toEqual("");
  });

  it("删除一个item", async () => {
    const deleteButtons = screen.getAllByText("删除");
    deleteButtons[0].click();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
