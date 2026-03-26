// Contact form submission handler
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Here you would typically save to database or send email
    // For now, just validate and respond
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // In production, integrate with email service like SendGrid or NodeMailer
    console.log("Contact submission:", { name, email, phone, message });

    res.status(200).json({
      message: "Thank you for contacting us! We'll get back to you soon.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
