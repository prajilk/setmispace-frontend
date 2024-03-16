import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleContactMessage(formData) {
    const { data } = await axios.post("/contact", formData);
    return data;
}

export function useContactMessage(onSuccess) {
    return useMutation({
        mutationFn: handleContactMessage,
        onSuccess,
        onError: () => {
            toast.error("Unable to sent message.");
        },
    });
}
