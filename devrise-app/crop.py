import os
from PIL import Image

input_path = r"c:\Users\saksa\sak it solutions\sak-it-solutions\logo.png"
output_path = r"c:\Users\saksa\sak it solutions\sak-it-solutions\devrise-app\public\logo.png"

try:
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size

    # The image has a Gemini star in the bottom right corner.
    # Let's crop it tightly to remove the star and any extra padding.
    # We will find the bounding box of non-black pixels, then shave a bit off the bottom right.
    
    threshold = 30
    pixels = img.load()
    
    left, top, right, bottom = width, height, 0, 0
    
    # Exclude bottom right corner (e.g. 60x60) when calculating bounding box to avoid the star
    for y in range(height):
        for x in range(width):
            # Skip bottom right corner
            if x > width - 80 and y > height - 80:
                continue
                
            r, g, b, a = pixels[x, y]
            if max(r, g, b) > threshold:
                if x < left: left = x
                if x > right: right = x
                if y < top: top = y
                if y > bottom: bottom = y
                
    if left < right and top < bottom:
        # Add slight padding
        padding = 10
        left = max(0, left - padding)
        top = max(0, top - padding)
        right = min(width, right + padding)
        bottom = min(height, bottom + padding)
        
        img_cropped = img.crop((left, top, right, bottom))
        img_cropped.save(output_path)
        print(f"Cropped successfully! Saved to {output_path}")
    else:
        print("Could not find bounds.")
        
except Exception as e:
    print(f"Error: {e}")
