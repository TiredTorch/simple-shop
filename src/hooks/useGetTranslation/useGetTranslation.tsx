import { useParams } from "next/navigation";
import en from "@/i18n/en.json";
import uk from "@/i18n/uk.json";

const translations = {
    en,
    uk
}

const defaultTranslationData = {
    translation: translations["en"],
    language: "en"
}

export const useGetTranslation = () => {
    const translationData = defaultTranslationData;

    const routeParams = useParams()

    const currentLanguage = routeParams?.["lang"] as string | undefined

    if (currentLanguage && currentLanguage in translations) {
        translationData.language = currentLanguage
        translationData.translation = translations?.[currentLanguage as keyof typeof translations]
    } 

    return translationData
}