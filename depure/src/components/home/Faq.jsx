import React, { useEffect, useState } from "react";
import FaqComponent from "react-faq-component";

function Faq() {

    const data = {
        rows: [
            {
                title: "What are the benefits of facial treatments?",
                content: "Facial treatments can help improve skin health, reduce signs of aging, and address specific skin concerns. They can hydrate the skin, improve its texture, and promote a healthy, radiant complexion.",
            },
            {
                title: "How often should I get a facial?",
                content: "The frequency of facial treatments can vary based on your skin type and specific concerns. In general, a monthly facial is a common recommendation, but your esthetician can provide personalized advice.",
            },
            {
                title: "Are facial treatments safe for all skin types?",
                content: "Facial treatments can be tailored to different skin types, but it's essential to consult with a skincare professional to ensure the treatment is suitable for your skin. They can recommend the best options for your needs.",
            },
            {
                title: "What can I expect during a facial session?",
                content: "During a facial, your skin will be cleansed, exfoliated, and treated with various skincare products. You may also receive a facial massage and mask. The experience is relaxing and rejuvenating.",
            },
            {
                title: "Do I need to prepare for a facial?",
                content: "Before your facial, it's a good idea to cleanse your face and arrive without makeup. Be prepared to discuss your skincare concerns with the esthetician to ensure a customized treatment.",
            },
        ],
    };
    

    const styles = {
        rowTitleColor: "rgb(186, 39, 38)",
        rowContentColor: "rgb(49, 11, 11)",
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <h1 className="text-center p-3">
                Frequently Asked Questions
            </h1>
            <div style={{
                width: "100%",
                padding: "0em 15em",
                justifyItems: "center",
                
            }}>
                <FaqComponent
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>

        </div>
    )
}

export default Faq