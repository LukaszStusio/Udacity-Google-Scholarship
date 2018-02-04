import pygame as pg
import urllib.request
pg.init()
url=urllib.request.urlopen("http://66.90.93.122/ost/the-nightmare-before-christmas-oogie-s-revenge/agbighfe/01%20This%20is%20Halloween.mp3").read()
pygame.mixer.init()
sample=pg.mixer.Sound(url)
sample.play()
