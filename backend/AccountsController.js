import AccountsService from './AccountsService.js';

class AccountsController {
    async login(req, res) {
        try {
            res.status(200).json({ title: "Login Page" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // Validate login and send a JSON response
    async loginValidate(req, res) {
        try {
            const user = await AccountsService.validate(req.body);

            if (user) {
                // Store isAdmin status in session
                req.session.isAdmin = user.isAdmin === 'true'; // Ensure boolean value
                console.log('User isAdmin:', req.session.isAdmin);

                // Send success response to the client
                res.status(200).json({ message: "Login successful", redirect: '/api/collections', isAdmin: req.session.isAdmin });
            } else {
                // Send error response to React frontend for incorrect login
                res.status(400).json({ error: "Can't find account" });
            }
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // Register logic without rendering (React will handle the frontend)
    async register(req, res) {
        try {
            res.status(200).json({ title: "Register Page" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // Create account and respond with JSON
    async createAccount(req, res) {
        try {
            // Create new account using service
            await AccountsService.createAccount(req.body.login, req.body.password, req.body.isAdmin === 'true');

            // Respond with JSON, or provide a redirect URL
            res.status(200).json({ message: "Account created", redirect: '/api/login' });
        } catch (e) {
            res.status(500).json({ error: "Create account error: " + e.message });
        }
    }
}

export default new AccountsController();
