import os
from moviepy import VideoFileClip

folder_path = r"D:\all\Web\Courses\Javascript"

total_duration = 0

for filename in os.listdir(folder_path):
    if filename.lower().endswith((".mp4", ".mkv", ".avi", ".mov")):
        try:
            clip = VideoFileClip(os.path.join(folder_path, filename), audio=False)
            total_duration += clip.duration
            clip.reader.close()
        except Exception as e:
            print(f"خطا در فایل {filename}: {e}")

hours = int(total_duration // 3600)
minutes = int((total_duration % 3600) // 60)
seconds = int(total_duration % 60)

print(f"مجموع زمان ویدیوها: {hours:02}:{minutes:02}:{seconds:02}")
