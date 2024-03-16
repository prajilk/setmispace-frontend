import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function getCategories() {
    const { data } = await axios.get(`/business/categories`);
    if (data && data.categories) return data.categories;
    return null;
}

export function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
}