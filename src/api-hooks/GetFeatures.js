import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function getFeatures() {
    const { data } = await axios.get(`/business/features`);
    if (data && data.features) return data.features;
    return null;
}

export function useFeatures() {
    return useQuery({
        queryKey: ["features"],
        queryFn: getFeatures,
    });
}