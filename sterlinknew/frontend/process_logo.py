from PIL import Image, ImageDraw
import sys

def make_circle(path, out_path):
    try:
        img = Image.open(path).convert("RGBA")
        
        # Create a mask
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
        
        # Apply mask
        img.putalpha(mask)
        
        img.save(out_path)
        print(f"Processed {path} -> {out_path}")
    except Exception as e:
        print(f"Failed {path}: {e}")

make_circle("public/images/Logo.png", "public/images/Logo.png")
make_circle("public/favicon.png", "public/favicon.png")
make_circle("public/favicon.ico", "public/favicon.ico")
