import os
import subprocess

folder_path = r"D:\now\web\Jonas\Part-1\8 - Optional Practice Project EatNSplit"
total_duration = 0

for filename in os.listdir(folder_path):
    if filename.lower().endswith((".mp4", ".mkv", ".avi", ".mov")):
        file_path = os.path.join(folder_path, filename)
        cmd = [
            "ffprobe",
            "-v", "error",
            "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1",
            file_path
        ]
        try:
            output = subprocess.check_output(cmd, stderr=subprocess.STDOUT).decode().strip()
            duration = float(output)
            total_duration += duration
        except subprocess.CalledProcessError as e:
            print(f"Error in faile {filename}: {e.output.decode()}")

hours = int(total_duration // 3600)
minutes = int((total_duration % 3600) // 60)
seconds = int(total_duration % 60)

print(f"total video length: {hours:02}:{minutes:02}:{seconds:02}")
