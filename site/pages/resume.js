import { useEffect } from "react";

const ResumePage = () => {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1fWSrVLW5R9XKyWPPS0CzOK9cX8XFMNhXOqhXIACSwPo/view";
    }, []);

    return(
        <>
            <section className="flex justify-center items-center h-screen">
                <h4>Redirecting you to resume...</h4>
            </section>
        </>
    )
};

export default ResumePage;