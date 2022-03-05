import React, { FunctionComponent } from "react";
import Tag, {ButtonStyles} from "./tag"

interface TagsProps {
	tags: string[];
  styles?: ButtonStyles;
  onClick?: (tag: string, isPushed: boolean) => void;
}

const Tags: FunctionComponent<TagsProps> = ({ tags, styles = {}, onClick = () => {} }) => (
  <div className="flex flex-wrap flex-row">
    {tags.map((tag) => {
      return (
        <div className="m-1" key={tag}>
          <Tag tag={tag} styles={styles} onClick={onClick} />
        </div>
      )
    })}
  </div>
);

export default Tags;