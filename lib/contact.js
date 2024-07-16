
import { redirect } from "next/navigation";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function submitForm(prevState, formData) {

    const message = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message')
    }

    // validation
    if (
        isInvalidText(message.name) ||
        isInvalidText(message.email) ||
        !message.email.includes('@') ||
        isInvalidText(message.message)
    ) {
        return {
            message: 'Invalid input.'
        }
    }

    try {
        await sendMessage(message)
        return {
            message: 'Successfully submitted message'
        }
    } catch (error) {
        console.log(error)
        return {
            message: 'Failed to submit message'
        }
    }
}

async function sendMessage(message) {
    
}