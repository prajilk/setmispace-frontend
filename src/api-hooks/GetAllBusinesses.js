import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function getAllBusinesses(filter) {
    if (filter === "latest") {
        const { data } = await axios.get(`/business/latest`);
        if (data && data.businesses) return data.businesses;
        return null;
    }
    const { data } = await axios.get(`/business`);
    if (data && data.businesses) return data.businesses;
    return null;
}

export function useAllBusinesses(filter) {
    return useQuery({
        queryKey: ["businesses", filter],
        queryFn: () => getAllBusinesses(filter),
    });
}