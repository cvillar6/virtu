import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TextNode {
  type: 'text';
  text: string;
  bold?: boolean;
}

interface LinkNode {
  type: 'link';
  url: string;
  children: TextNode[];
}

interface ListItemNode {
  type: 'list-item';
  children: (TextNode | LinkNode)[];
}

interface ContentNode {
  type: 'paragraph' | 'heading' | 'list';
  children: (TextNode | LinkNode | ListItemNode)[];
  level?: number;
  format?: 'unordered' | 'ordered';
}

@Component({
  selector: 'app-dynamic-content',
  imports: [CommonModule],
  templateUrl: './dynamic-content.html',
  styleUrl: './dynamic-content.css'
})
export class DynamicContent {
  @Input() content: ContentNode[] = [];

  isTextNode(node: any): node is TextNode {
    return node.type === 'text';
  }

  isLinkNode(node: any): node is LinkNode {
    return node.type === 'link';
  }

  isListItemNode(node: any): node is ListItemNode {
    return node.type === 'list-item';
  }

  getTextContent(children: (TextNode | LinkNode)[]): string {
    return children.map(child => {
      if (this.isTextNode(child)) {
        return child.text;
      } else if (this.isLinkNode(child)) {
        return child.children.map(textChild => textChild.text).join('');
      }
      return '';
    }).join('');
  }
}
