import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function getBusiness(id) {
    const { data } = await axios.get(`/business/${id}`);
    if (data && data.business) return data.business;
    return null;
}

export function useBusiness(id) {
    return useQuery({
        queryKey: ["business"],
        queryFn: () => getBusiness(id),
    });
}