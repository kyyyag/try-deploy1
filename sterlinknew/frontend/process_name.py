from PIL import Image

def remove_white(path, out_path):
    try:
        img = Image.open(path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            # If pixel is close to white, make it transparent
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # JPEG doesn't support transparency, so we must save as PNG
        if out_path.endswith('.jpeg') or out_path.endswith('.jpg'):
            out_path = out_path.rsplit('.', 1)[0] + '.png'
            
        img.save(out_path, "PNG")
        print(f"Processed {path} -> {out_path}")
    except Exception as e:
        print(f"Failed {path}: {e}")

remove_white("public/images/sterlink-name.jpeg", "public/images/sterlink-name.png")
