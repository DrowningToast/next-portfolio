export interface ImageFormat {
  ext: string;
  hash: string;
  height: number;
  mime: `${string}/${string}`;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
}

export interface Data {
  alignment?: string;
  text?: string;
  level?: number;
  items?: string[];
  style?: string;
  caption?: string;
  stretched?: boolean;
  withBackground?: boolean;
  withBorder?: boolean;
  code?: string;
  file?: {
    alt: string;
    formats: ImageFormat;
    height: number;
    mime: `${string}/${string}`;
    size: number;
    url: string;
    width: number;
  };
}

export interface Block {
  id: string;
  type: "paragraph" | "header" | "header" | "code" | "image" | "list" | "quote";
  data: Data;
}

export interface BlogContent {
  time: number;
  blocks: Block[];
  version: string;
}
