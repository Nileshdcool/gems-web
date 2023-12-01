import type { Note } from "~/services/db.client";
import { toast } from "react-toastify";

interface NoteWithReplies extends Note {
  replies?: Note[];
}

export function organizeReplies(data: Note[]): NoteWithReplies[] {
  const result: NoteWithReplies[] = [];

  for (const obj of data) {
    const targetTag = obj.tags.find(
      (tag) =>
        tag[0] === "e" &&
        (tag.length === 2 || tag[2] === "reply" || tag[2] === "root")
    );

    if (targetTag) {
      const parentIndex = data.findIndex(
        (parent) => parent.eventId === targetTag[1]
      );

      if (parentIndex !== -1) {
        const parentObj = data[parentIndex] as NoteWithReplies;
        if (!parentObj.replies) {
          parentObj.replies = [];
        }
        parentObj.replies.push(obj);
        continue;
      } else {
        const existingObjIndex = result.findIndex((item) =>
          item.tags.find(
            (tag) =>
              tag[0] === "e" &&
              tag[1] === targetTag[1] &&
              (tag.length === 2 || tag[2] === "reply" || tag[2] === "root")
          )
        );

        if (existingObjIndex !== -1) {
          const existingObj = result[existingObjIndex] as NoteWithReplies;
          if (!existingObj.replies) {
            existingObj.replies = [];
          }
          existingObj.replies.push(obj);
          continue;
        }
      }
    }
    result.push(obj);
  }

  return result;
}

export const showNoteLinkCopied = (eventId: string) => {
  navigator.clipboard.writeText(eventId);
  toast.success("Copied!", {
    position: toast.POSITION.TOP_CENTER,
  });
};
