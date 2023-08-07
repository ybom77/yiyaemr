
import { SELECTION_CHANGE_COMMAND } from "lexical";
import { createEditor, CreateEditorArgs } from 'lexical';
import { $getRoot, $getSelection, $createParagraphNode, $createTextNode } from 'lexical';


export default async function (el: HTMLElement, config: CreateEditorArgs = {}) {
    const editor = createEditor(config);

    // editor.registerNodeTransform

    editor.setRootElement(el);

    editor.update(() => {
        // Get the RootNode from the EditorState
        const root = $getRoot();
        // Get the selection from the EditorState
        const selection = $getSelection();
        // Create a new ParagraphNode
        const paragraphNode = $createParagraphNode();
        // Create a new TextNode
        const textNode = $createTextNode('Hello world');
        // Append the text node to the paragraph
        paragraphNode.append(textNode);
        // Finally, append the paragraph to the root
        root.append(paragraphNode);
    });

    // editor.registerDecoratorListener
    editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
        const selection = $getSelection();
        console.log(selection);
        return true
    }, 0);
}