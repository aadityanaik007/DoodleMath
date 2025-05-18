from fastapi import APIRouter
import base64
from io import BytesIO
from apps.calculator.utils import analyze_image
from schema import ImageData
from PIL import Image
from fastapi import HTTPException

router = APIRouter()

@router.post("")
async def run(data: ImageData):
    if not data.image or ',' not in data.image:
        raise HTTPException(status_code=400, detail="Invalid base64 image format")
    try:
        image_base64 = data.image.split(',')[1]
        image_data = base64.b64decode(image_base64)
        image_bytes = BytesIO(image_data)
        image = Image.open(image_bytes)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Image decoding failed: {str(e)}")

    print("data.dict_of_vars ==========", data.dict_of_vars)
    responses = analyze_image(image, dict_of_vars=data.dict_of_vars)

    print("response in route:", responses)
    return {
        "message": "Image Processed",
        "type": "success",
        "data": responses
    }
