
import Swal from 'sweetalert2';
import { client } from './sanity';

export  const inviteUserToSanity = async (email) => {    
    try {
        // Invite user with administrator role
        const response = await client.users.invite({ 
            email: email,
            role: 'administrator',
        });

        console.log('User invited:', response); // Log response for confirmation

        // Show success message
        Swal.fire({
            title: 'Success!',
            text: `Invitation sent to ${email} successfully.`,
            icon: 'success',
            confirmButtonText: 'OK',
        });
    } catch (error) {
        console.error('Error inviting user to Sanity:', error); // Log error for debugging

        // Show error message
        Swal.fire({
            title: 'Error!',
            text: error.message || 'There was an issue sending the invitation. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
        });
    }
};
