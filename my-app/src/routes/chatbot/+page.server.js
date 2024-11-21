import { messages } from '$lib/messagesStore.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
        const newMessage = formData.get('message');

        // Update the messages store
        messages.update(currentMessages => {
            return [...currentMessages, newMessage];
        });

        return {
            success: true
        };
		
	}
};

