import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// --- CONFIGURATION ---
const INPUT_DIR = './src/assets/homeimg'
const OUTPUT_DIR = './src/assets/homeimg-optimized'
const TARGET_WIDTH = 1600
const QUALITY = 100

// ---------------------

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputPath = path.resolve(__dirname, INPUT_DIR)
const outputPath = path.resolve(__dirname, OUTPUT_DIR)

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true })
}

fs.readdir(inputPath, (err, files) => {
  if (err) return console.error('Erreur lecture dossier:', err)

  files.forEach((file) => {
    if (file.match(/\.(jpg|jpeg|png|PNG|JPG)$/)) {
      const name = path.parse(file).name

      sharp(path.join(inputPath, file))
        .resize({ width: TARGET_WIDTH })
        .webp({ quality: QUALITY })
        .toFile(path.join(outputPath, `${name}.webp`))
        .then(() => console.log(`✅ ${file} -> ${name}.webp optimisé`))
        .catch((err) => console.error(`❌ Erreur sur ${file}:`, err))
    }
  })
})
