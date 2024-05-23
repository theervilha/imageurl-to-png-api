const sharp = require('sharp');
const axios = require('axios');


const convertToPNG = async (req, res) => {
    const { image_url } = req.query;

    if (!image_url) {
        res.status(400).json({ "error": "Missing image_url in url query parameters" })
    }

    try {
        const incoming_image_buffer = await get_buffer_from_url(image_url)
        const converted_image_buffer = await convertImageToPNG(incoming_image_buffer)

        res.set('Content-Type', 'image/png');
        res.send(converted_image_buffer);
    } catch (error) {
        res.status(500).json({ "error": `Failed to convert image to PNG: ${error}` })
    }
}

const convertImageToPNG = (buffer) => {
    return sharp(buffer)
        .png({
            compressionLevel: 9, // Adjust compression level as needed (0-9)
            palette: true, // Use a color palette (reduces file size for simpler images)
            quality: 100, // Set quality level (0-100)
            colors: 256, // Set maximum number of colors in the palette (2^8 = 256 colors for 8-bit)
            dither: 1, // Apply dithering to improve color accuracy
        })
        .toBuffer()
}

const get_buffer_from_url = async (image_url) => {
    const response = await axios.get(image_url, { responseType: 'arraybuffer' })
    return Buffer.from(response.data, 'binary')
}


module.exports = {
    convertToPNG,
}