import React from "react";
import { render, screen } from "@testing-library/react";
import axiosMock from "axios";
import RedditListPage from "../../../../src/features/examples/pages/RedditList";

jest.mock("axios");

describe("examples/RedditListPage", () => {
  it("RedditList 渲染成功", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: {
          children: [
            { data: { id: 0, title: "0" } },
            { data: { id: 1, title: "1" } },
            { data: { id: 2, title: "2" } },
            { data: { id: 3, title: "3" } },
            { data: { id: 4, title: "4" } },
            { data: { id: 5, title: "5" } },
          ],
        },
      },
    });
    render(<RedditListPage />);
    expect(screen.getByText("加载中...")).toBeTruthy();
    await screen.findAllByRole("listitem");
    // 数据请求被调用的次数
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });
});
