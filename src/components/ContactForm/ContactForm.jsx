import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const ContactForm = () => {

const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        
        
}

    return (
        <section className={`${styles.container}`}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button

                        text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="20px" />} />
                    <Button


                        text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />

                </div>

                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<HiMail fontSize="20px" />} />

                <form onSubmit = {onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
    )
}

export default ContactForm