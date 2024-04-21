import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme-original/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import {Highlight} from '../../src/components/Highlight';
import Image from '@theme/IdealImage';

// NOTE: this will make the import available everywhere - https://docusaurus.io/docs/next/markdown-features/react
export default {
  ...MDXComponents,
  Image,
  Highlight,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
};
