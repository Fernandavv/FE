import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';

const MailchimpForm = () => {
    // Construa a URL de postagem usando variáveis de ambiente
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    // Componente de formulário de inscrição do Mailchimp
    const CustomForm = ({ status, message, onValidated }) => {
        let email;
        const handleSubmit = (e) => {
            e.preventDefault();
            email &&
                email.value.indexOf('@') > -1 &&
                onValidated({
                    EMAIL: email.value,
                });
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        ref={(node) => (email = node)}
                        type="email"
                        placeholder="Your email"
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                {status === 'error' && (
                    <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />
                )}
                {status === 'success' && (
                    <div style={{ color: 'green' }}>Subscribed !</div>
                )}
            </div>
        );
    };

    return (
        <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
            )}
        />
    );
};

export default MailchimpForm;
