import cv2
import os
import sys

try:
  fname, fext = os.path.splitext(sys.argv[1])
except Exception as e:
  print(e)
  sys.exit(1)

src = cv2.imread(sys.argv[1], cv2.IMREAD_UNCHANGED)
try:
  dst = cv2.resize(src, dsize=(int(sys.argv[2]), int(sys.argv[3])), interpolation=cv2.INTER_AREA)
except Exception as e:
  print(e)
  sys.exit(1)

# dst2 = cv2.resize(src, dsize=(int(sys.argv[2]), int(sys.argv[3])), fx=0.5, fy=0.5 interpolation=cv2.INTER_LINEAR)
cv2.imwrite('./resized'+fext, dst)
print('Done')
