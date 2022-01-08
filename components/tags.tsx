import React, { FunctionComponent } from "react";
import Tag from "./tag"

interface TagsProps {
	tags: string[];
  onClick?: (tag: string, isPushed: boolean) => void;
}

const Tags: FunctionComponent<TagsProps> = ({ tags, onClick = () => {} }) => (
  <div>
    {tags.map((tag) => {
      return (
        <span className="m-2" key={tag}>
          <Tag tag={tag} onClick={onClick} />
        </span>
      )
    })}
  </div>
);

export default Tags;