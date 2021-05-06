import React from "react";
import useRedditList from "../data/useRedditList";

const redditList = () => {
  const { data, error } = useRedditList("redditlist");

  if (error) return <div>出错了...</div>;
  if (!data) return <div>加载中...</div>;

  if (data.length === 0) {
    return <div className="no-items-tip">没有数据</div>;
  }
  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.data.id}>
          <a
            target="_blank"
            href={item.data.url}
            rel="noreferrer"
          >
            {item.data.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const RandomCat = () => {
  return (
    <div className="reddit-list-page">
      {redditList()}
      <article>
        <section>
          <p>
            该示例主要用于演示如何使用<dfn>swr</dfn>
            进行数据请求。
            <br />
            <dfn>swr</dfn>
            是一款基于hooks的远程数据请求库，由nextjs的团队vercel开发。你可以
            <a
              href="https://github.com/vercel/swr"
              target="_blank"
              rel="noreferrer"
            >
              点击这里阅读swr文档
            </a>
            。
          </p>
        </section>

        <section>
          <p>
            swr不仅仅是一款请求库，它还可以承担部分状态管理的职责。
            <br />
            swr通过key来判断哪些请求是相同的，如果你在多个组件中使用了相同的key,
            那么swr会自动将更新后的数据下发到这些组件中，并触发重绘。
            建议与远程请求相关的状态尽量通过swr的key进行管理，而不是存放到全局状态中。
          </p>
          <p>
            同时swr会对数据进行缓存，当你重新访问页面的时候，swr会先用缓存的数据显示页面，
            然后再去请求数据，并用新获得的数据重新渲染页面。
          </p>
          <p>
            swr还有许多其他功能，比如聚焦页面后自动重新请求，支持Suspense等功能。
            详情请自行查阅文档。
          </p>
        </section>

        <section>
          <p>
            该页面位于
            <mark>
              /src/features/examples/pages/RedditList.js
            </mark>
            。
          </p>
          <p>
            页面中的数据请求定义于
            <mark>
              /src/features/examples/data/useRedditList.js
            </mark>
            。
          </p>
        </section>
      </article>
    </div>
  );
};

export default RandomCat;
