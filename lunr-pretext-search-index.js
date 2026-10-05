var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "quiz06-v1",
  "level": "1",
  "url": "quiz06-v1.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Quiz 1",
  "body": " Quiz 1   Name:   Problem session instructor: Time:                                       Calculate the non-relativistic kinetic energy (in eV) for an electron of wavelength 600 nm.    "
},
{
  "id": "quiz06-v1-electron-energy",
  "level": "2",
  "url": "quiz06-v1.html#quiz06-v1-electron-energy",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Calculate the non-relativistic kinetic energy (in eV) for an electron of wavelength 600 nm.   "
},
{
  "id": "quiz06-v2",
  "level": "1",
  "url": "quiz06-v2.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Quiz 2",
  "body": " Quiz 2   Name:   Problem session instructor: Time:                                       An X-ray photon of wavelength 40 nm ionizes a hydrogen atom. Given that the binding energy of hydrogen is 13.6 eV, calculate the maximum kinetic energy of the resulting free electron.    "
},
{
  "id": "quiz06-v2-ionization",
  "level": "2",
  "url": "quiz06-v2.html#quiz06-v2-ionization",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "  An X-ray photon of wavelength 40 nm ionizes a hydrogen atom. Given that the binding energy of hydrogen is 13.6 eV, calculate the maximum kinetic energy of the resulting free electron.   "
},
{
  "id": "quiz06-v3",
  "level": "1",
  "url": "quiz06-v3.html",
  "type": "Worksheet",
  "number": "3",
  "title": "Quiz 3",
  "body": " Quiz 3   Name:   Problem session instructor: Time:                                       The electron binding energy for a particular metal is 2.0 eV. Calculate the cutoff frequency for the photoelectric effect in this metal.    "
},
{
  "id": "quiz06-v3-cutoff",
  "level": "2",
  "url": "quiz06-v3.html#quiz06-v3-cutoff",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "",
  "body": "  The electron binding energy for a particular metal is 2.0 eV. Calculate the cutoff frequency for the photoelectric effect in this metal.   "
},
{
  "id": "quiz06-v4",
  "level": "1",
  "url": "quiz06-v4.html",
  "type": "Worksheet",
  "number": "4",
  "title": "Quiz 4",
  "body": " Quiz 4   Name:   Problem session instructor: Time:                                       Light of wavelength 550 nm passes through a three-slit system where the slits are separated by a distance m, and produces an interference pattern on a distant screen.     Draw phasor diagrams for the two minima between the central maximum and the first side maximum.      Calculate the angles (relative to the direction of the central maximum) where each of these minima occurs.     "
},
{
  "id": "quiz06-v4-three-slit",
  "level": "2",
  "url": "quiz06-v4.html#quiz06-v4-three-slit",
  "type": "Worksheet Exercise",
  "number": "4.1",
  "title": "",
  "body": "  Light of wavelength 550 nm passes through a three-slit system where the slits are separated by a distance m, and produces an interference pattern on a distant screen.     Draw phasor diagrams for the two minima between the central maximum and the first side maximum.      Calculate the angles (relative to the direction of the central maximum) where each of these minima occurs.    "
},
{
  "id": "quiz06-v5",
  "level": "1",
  "url": "quiz06-v5.html",
  "type": "Worksheet",
  "number": "5",
  "title": "Quiz 5",
  "body": " Quiz 5   Name:   Problem session instructor: Time:                                       Light with wavelength 633 nm is incident on a 1.75- m-wide slit. Find the angular width of the central peak in the diffraction pattern, taken as the angular separation between the first minima.    "
},
{
  "id": "quiz06-v5-single-slit",
  "level": "2",
  "url": "quiz06-v5.html#quiz06-v5-single-slit",
  "type": "Worksheet Exercise",
  "number": "5.1",
  "title": "",
  "body": "  Light with wavelength 633 nm is incident on a 1.75- m-wide slit. Find the angular width of the central peak in the diffraction pattern, taken as the angular separation between the first minima.   "
},
{
  "id": "quiz06-v6",
  "level": "1",
  "url": "quiz06-v6.html",
  "type": "Worksheet",
  "number": "6",
  "title": "Quiz 6",
  "body": " Quiz 6   Name:   Problem session instructor: Time:                                       In bright light, the human eye’s pupil diameter is about 2 mm. If diffraction were the limiting factor, what’s the eye’s minimum angular resolution under these conditions, assuming 550-nm light?    "
},
{
  "id": "quiz06-v6-eye-resolution",
  "level": "2",
  "url": "quiz06-v6.html#quiz06-v6-eye-resolution",
  "type": "Worksheet Exercise",
  "number": "6.1",
  "title": "",
  "body": "  In bright light, the human eye’s pupil diameter is about 2 mm. If diffraction were the limiting factor, what’s the eye’s minimum angular resolution under these conditions, assuming 550-nm light?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
