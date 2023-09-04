import { users } from '../../data/users.js';
import { emailNumberValidationSchema } from './validationschema/validationSchema.js';
let pendingTimeout = null;
export const searchUser = async (req, res) => {
    const { email, num } = req.body;
    try {
        await emailNumberValidationSchema.validateAsync(req.body);
        if (pendingTimeout) {
            clearTimeout(pendingTimeout);
        }
        pendingTimeout = setTimeout(() => {
            pendingTimeout = null;
            const foundUsers = users.filter(user => {
                return user.email === email && (!num || user.number.toString() === num);
            });
            if (foundUsers.length === 0) {
                return res.json({ message: 'User not found' });
            }
            res.json(foundUsers);
        }, 5000);
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
