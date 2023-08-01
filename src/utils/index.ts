export const translateDifficultStatus = (difficult: string) =>
    difficult === "Low"
        ? "Baja"
        : difficult === "Hight"
            ? "Alta"
            : "Normal";

export const truncateTitle = (title: string) =>
    title.length >= 50
        ? `${title.split("").splice(0, 45).join("").trim()}...`
        : title;