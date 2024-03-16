import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function getHotSelling() {
    const { data } = await axios.get(`/hot-selling`);
    if (data && data.hotSelling) return data.hotSelling;
    return null;
}

export function useHotSelling() {
    return useQuery({
        queryKey: ["hot-selling"],
        queryFn: getHotSelling,
    });
}