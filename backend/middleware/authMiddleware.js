    
    import jwt from 'jsonwebtoken';
    export const authMiddleware = (req, res, next) => {
         try {
           // To inspect all headers
            const token = req.cookies.token
            if (!token) {
            return res.status(401).send({ success: false, message: 'Authentication required' });
            }
        
        const decoded = jwt.verify(token, process.env.SECKEY);
      
    
        req.user = decoded; 
        next();
        } catch (error) {
        return res.status(401).send({ success: false, message: 'Invalid token' });
        }
    };
    