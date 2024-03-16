import { useState } from "react"
import { toast } from "sonner";
import { useContactMessage } from "../../api-hooks/ContactMessage";
import { Loader2 } from "lucide-react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
        businessType: "",
        phone: "",
        email: "",
        comments: ""
    })

    function onSuccess() {
        toast.success("Message sent successfully")
        setFormData({
            firstName: "",
            lastName: "",
            businessName: "",
            businessType: "",
            phone: "",
            email: "",
            comments: ""
        })
    }

    const mutation = useContactMessage(onSuccess);

    function handleFormSubmission(e) {
        e.preventDefault();
        if (
            !formData ||
            !formData.firstName ||
            !formData.lastName ||
            !formData.businessName ||
            !formData.businessType ||
            !formData.phone ||
            !formData.email ||
            !formData.comments
        ) {
            return toast.error("Fill all the fields!")
        }

        mutation.mutate(formData)
    }

    return (
        <form onSubmit={handleFormSubmission} className="comment-one__form contact-form-validated" noValidate="novalidate">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="text" placeholder="Business Name" value={formData.businessName} onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))} />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="text" placeholder="Type of Business" value={formData.businessType} onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))} />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="comment-form__input-box">
                        <input type="email" placeholder="Email Id" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="comment-form__input-box">
                        <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}></textarea>
                    </div>
                    <button className="thm-btn comment-form__btn flex gap-2" type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ?
                            <>
                                <Loader2 className="loader" />
                                Submitting
                            </> :
                            "Submit"
                        }
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm
