import { type RefObject } from "react";
import { ClipboardCopy } from "lucide-react";
import toast from "react-hot-toast";
import styles from "./ButtonClipboard.module.scss";

type ButtonClipboardProps = {
  articleRef: RefObject<HTMLElement | null>;
};

export function ButtonClipboard({ articleRef }: ButtonClipboardProps) {
  async function copyArticle() {
    const toastId = "copy-article";
    const article = articleRef.current;

    if (!article) {
      toast.error("Nie znaleziono artykułu do skopiowania.", {
        id: toastId,
      });
      return;
    }

    if (!navigator.clipboard) {
      toast.error("Przeglądarka nie udostępnia kopiowania do schowka.", {
        id: toastId,
      });
      return;
    }

    toast.loading("Kopiowanie…", { id: toastId });

    try {
      const text = article.innerText;

      if (
        typeof ClipboardItem !== "undefined" &&
        typeof navigator.clipboard.write === "function"
      ) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([article.outerHTML], {
                type: "text/html",
              }),
              "text/plain": new Blob([text], {
                type: "text/plain",
              }),
            }),
          ]);

          toast.success("Skopiowano artykuł z formatowaniem.", {
            id: toastId,
          });
          return;
        } catch {
          // Pozostaw "Kopiowanie…" i spróbuj zwykłego tekstu.
        }
      }

      await navigator.clipboard.writeText(text);

      toast.success("Skopiowano artykuł jako zwykły tekst.", {
        id: toastId,
      });
    } catch {
      toast.error("Nie udało się skopiować. Zaznacz tekst i użyj Ctrl+C.", {
        id: toastId,
      });
    }
  }

  return (
    <div
      className={styles.clipboardButtonContainer}
      data-tooltip-id="app-tooltip"
      data-tooltip-content={"Skopiuj do schowka"}
      data-tooltip-variant="info"
    >
      <button
        type="button"
        onClick={copyArticle}
        className={styles.icon}
        aria-label="Kopiuj artykuł"
      >
        <ClipboardCopy aria-hidden="true" />
      </button>
    </div>
  );
}
