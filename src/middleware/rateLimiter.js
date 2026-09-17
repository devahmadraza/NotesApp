import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my-limit-key")
        console.log("Rate limit result:", success);
        if (!success) {
            return res.status(429).json(
                { message: "Too many requests, please try again leter" }
            )
        }
        console.log("✅ Request allowed");
        next()
    } catch (error) {
        console.log("Rate Limit Error", error)
        next(error)
    }
}
export default rateLimiter