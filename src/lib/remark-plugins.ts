import { visit } from "unist-util-visit"
import { h } from "hastscript"

export function remarkDirectiveToHast() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes || {}) as any
        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}
