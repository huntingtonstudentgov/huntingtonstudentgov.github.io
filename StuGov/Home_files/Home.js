// Created by iWeb 3.0.4 local-build-20160427

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Home_files/GraphPaper_01.png'),IWCreateImage('Home_files/GraphPaper_02.png'),IWCreateImage('Home_files/GraphPaper_01_1.png'),IWCreateImage('Home_files/GraphPaper_01_2.png'),IWCreateImage('Home_files/GraphPaper_09.png'),IWCreateImage('Home_files/GraphPaper_08.png'),IWCreateImage('Home_files/GraphPaper_07.png'),IWCreateImage('Home_files/GraphPaper_01_3.png')],null,0,0.659581,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Home_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
