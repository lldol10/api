module.exports = {
    jwt:{
        secret: ProcessingInstruction.env.AUTH_SECRET || "default",
        expiresIn: "1d"
    }
}