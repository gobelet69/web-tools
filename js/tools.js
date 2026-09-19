'use strict';
var TOOLS = [
  // ── Images ──
  {id:'image-resize',name:'Image Resize',desc:'Resize images to specific dimensions',cat:'Images',url:'image/resize.html',keys:['image','resize','scale','width','height','dimensions','photo'],ready:true},
  {id:'image-crop',name:'Image Crop',desc:'Crop images to a specific area',cat:'Images',url:'image/crop.html',keys:['image','crop','cut','trim','photo'],ready:true},
  {id:'image-convert',name:'Image Convert',desc:'Convert images between PNG, JPG, WebP, AVIF',cat:'Images',url:'image/convert.html',keys:['image','convert','png','jpg','jpeg','webp','avif','format','photo'],ready:true},
  {id:'image-compress',name:'Image Compress',desc:'Compress images by adjusting quality',cat:'Images',url:'image/compress.html',keys:['image','compress','optimize','quality','reduce','size','photo'],ready:true},
  {id:'image-rotate',name:'Image Rotate / Flip',desc:'Rotate or flip images',cat:'Images',url:'image/rotate.html',keys:['image','rotate','flip','mirror','horizontal','vertical'],ready:true},
  {id:'image-info',name:'Image Info',desc:'View image dimensions, size, type',cat:'Images',url:'image/info.html',keys:['image','info','dimensions','size','metadata','mime'],ready:true},
  {id:'image-to-base64',name:'Image to Base64',desc:'Convert an image to a Base64 string',cat:'Images',url:'image/to-base64.html',keys:['image','base64','encode','data uri'],ready:true},
  {id:'base64-to-image',name:'Base64 to Image',desc:'Convert a Base64 string back to an image',cat:'Images',url:'image/from-base64.html',keys:['base64','image','decode','data uri'],ready:true},
  {id:'favicon-generator',name:'Favicon Generator',desc:'Generate favicons from an image',cat:'Images',url:'image/favicon.html',keys:['favicon','icon','generate','ico'],ready:true},
  {id:'color-extractor',name:'Color Extractor',desc:'Extract dominant colors from an image',cat:'Images',url:'image/color-extractor.html',keys:['color','extract','dominant','palette','image'],ready:true},
  {id:'metadata-viewer',name:'Image Metadata Viewer',desc:'View EXIF and other image metadata',cat:'Images',url:'image/metadata.html',keys:['metadata','exif','image','viewer','info'],ready:true},
  {id:'metadata-remover',name:'Image Metadata Remover',desc:'Strip metadata from images',cat:'Images',url:'image/strip-metadata.html',keys:['metadata','exif','remove','strip','privacy','image'],ready:true},

  // ── Audio ──
  {id:'audio-convert',name:'Audio Convert',desc:'Convert audio files between formats',cat:'Audio',url:'audio/convert.html',keys:['audio','convert','wav','mp3','ogg','format'],ready:true},
  {id:'audio-trim',name:'Audio Trim',desc:'Trim audio start and end',cat:'Audio',url:'audio/trim.html',keys:['audio','trim','cut','start','end'],ready:true},
  {id:'audio-merge',name:'Audio Merge',desc:'Merge multiple audio files',cat:'Audio',url:'audio/merge.html',keys:['audio','merge','join','concatenate'],ready:true},
  {id:'audio-volume',name:'Audio Volume',desc:'Adjust audio volume',cat:'Audio',url:'audio/volume.html',keys:['audio','volume','gain','loud','quiet'],ready:true},
  {id:'audio-reverse',name:'Audio Reverse',desc:'Reverse an audio file',cat:'Audio',url:'audio/reverse.html',keys:['audio','reverse','backwards'],ready:true},
  {id:'audio-info',name:'Audio Info',desc:'View audio duration, bitrate, sample rate',cat:'Audio',url:'audio/info.html',keys:['audio','info','duration','bitrate','sample rate','channels'],ready:true},

  // ── Video ──
  {id:'video-extract-audio',name:'Extract Audio from Video',desc:'Extract audio track from a video file',cat:'Video',url:'video/extract-audio.html',keys:['video','audio','extract','mp3','wav','soundtrack'],ready:true},
  {id:'video-trim',name:'Video Trim',desc:'Trim a video to a specific time range',cat:'Video',url:'video/trim.html',keys:['video','trim','cut','start','end'],ready:true},
  {id:'video-to-gif',name:'Video to GIF',desc:'Convert a video clip to an animated GIF',cat:'Video',url:'video/to-gif.html',keys:['video','gif','animate','convert'],ready:true},
  {id:'video-compress',name:'Video Compress',desc:'Compress a video file',cat:'Video',url:'video/compress.html',keys:['video','compress','reduce','size'],ready:true},
  {id:'video-mute',name:'Video Mute',desc:'Remove audio from a video',cat:'Video',url:'video/mute.html',keys:['video','mute','silent','remove audio'],ready:true},
  {id:'video-frame',name:'Extract Frame',desc:'Extract a single frame from a video',cat:'Video',url:'video/frame.html',keys:['video','frame','screenshot','thumbnail','extract'],ready:true},
  {id:'video-info',name:'Video Info',desc:'View video codec, resolution, duration',cat:'Video',url:'video/info.html',keys:['video','info','codec','resolution','duration','size'],ready:true},

  // ── PDF ──
  {id:'pdf-merge',name:'PDF Merge',desc:'Merge multiple PDFs into one',cat:'PDF',url:'pdf/merge.html',keys:['pdf','merge','combine','join'],ready:true},
  {id:'pdf-split',name:'PDF Split',desc:'Split a PDF into separate files',cat:'PDF',url:'pdf/split.html',keys:['pdf','split','separate','extract'],ready:true},
  {id:'pdf-reorder',name:'PDF Reorder Pages',desc:'Reorder pages in a PDF',cat:'PDF',url:'pdf/reorder.html',keys:['pdf','reorder','rearrange','pages','sort'],ready:true},
  {id:'pdf-rotate',name:'PDF Rotate Pages',desc:'Rotate pages in a PDF',cat:'PDF',url:'pdf/rotate.html',keys:['pdf','rotate','pages','orientation'],ready:true},
  {id:'images-to-pdf',name:'Images to PDF',desc:'Convert images into a PDF document',cat:'PDF',url:'pdf/images-to-pdf.html',keys:['image','pdf','convert','document'],ready:true},
  {id:'pdf-to-images',name:'PDF to Images',desc:'Convert PDF pages to images',cat:'PDF',url:'pdf/to-images.html',keys:['pdf','image','convert','export','pages'],ready:true},
  {id:'pdf-extract-text',name:'PDF Extract Text',desc:'Extract text content from a PDF',cat:'PDF',url:'pdf/extract-text.html',keys:['pdf','text','extract','copy'],ready:true},
  {id:'pdf-metadata',name:'PDF Metadata',desc:'View PDF metadata',cat:'PDF',url:'pdf/metadata.html',keys:['pdf','metadata','info','properties'],ready:true},

  // ── Text ──
  {id:'case-converter',name:'Case Converter',desc:'Convert text to uppercase, lowercase, title case',cat:'Text',url:'text/case-converter.html',keys:['text','case','uppercase','lowercase','capitalize','title','convert'],ready:true},
  {id:'word-counter',name:'Word Counter',desc:'Count characters, words, lines, paragraphs',cat:'Text',url:'text/word-counter.html',keys:['text','word','count','character','line','paragraph','reading time'],ready:true},
  {id:'text-reverse',name:'Reverse Text',desc:'Reverse a string of text',cat:'Text',url:'text/reverse.html',keys:['text','reverse','backwards','mirror'],ready:true},
  {id:'remove-duplicates',name:'Remove Duplicate Lines',desc:'Remove duplicate lines from text',cat:'Text',url:'text/remove-duplicates.html',keys:['text','duplicate','remove','unique','lines','deduplicate'],ready:true},
  {id:'sort-lines',name:'Sort Lines',desc:'Sort lines alphabetically or numerically',cat:'Text',url:'text/sort-lines.html',keys:['text','sort','lines','alphabetical','order'],ready:true},
  {id:'trim-whitespace',name:'Trim Whitespace',desc:'Trim leading and trailing whitespace',cat:'Text',url:'text/trim.html',keys:['text','trim','whitespace','spaces','clean'],ready:true},
  {id:'remove-empty-lines',name:'Remove Empty Lines',desc:'Remove blank lines from text',cat:'Text',url:'text/remove-empty.html',keys:['text','empty','blank','lines','remove','clean'],ready:true},
  {id:'tabs-spaces',name:'Tabs to Spaces',desc:'Convert between tabs and spaces',cat:'Text',url:'text/tabs-spaces.html',keys:['text','tabs','spaces','convert','indent'],ready:true},
  {id:'normalize-spaces',name:'Normalize Spaces',desc:'Normalize multiple spaces to single',cat:'Text',url:'text/normalize.html',keys:['text','normalize','spaces','clean','whitespace'],ready:true},

  // ── Developer ──
  {id:'json-formatter',name:'JSON Formatter',desc:'Format and beautify JSON data',cat:'Developer',url:'developer/json-formatter.html',keys:['json','format','beautify','pretty','indent','developer'],ready:true},
  {id:'json-validator',name:'JSON Validator',desc:'Validate JSON syntax',cat:'Developer',url:'developer/json-validator.html',keys:['json','validate','check','syntax','lint','developer'],ready:true},
  {id:'json-minifier',name:'JSON Minifier',desc:'Minify JSON by removing whitespace',cat:'Developer',url:'developer/json-minifier.html',keys:['json','minify','compress','compact','developer'],ready:true},
  {id:'json-to-csv',name:'JSON to CSV',desc:'Convert JSON array to CSV',cat:'Developer',url:'developer/json-to-csv.html',keys:['json','csv','convert','export','table','developer'],ready:true},
  {id:'csv-to-json',name:'CSV to JSON',desc:'Convert CSV data to JSON',cat:'Developer',url:'developer/csv-to-json.html',keys:['csv','json','convert','import','developer'],ready:true},
  {id:'xml-formatter',name:'XML Formatter',desc:'Format and indent XML',cat:'Developer',url:'developer/xml-formatter.html',keys:['xml','format','indent','beautify','developer'],ready:true},
  {id:'csv-viewer',name:'CSV Viewer',desc:'View CSV data as a table',cat:'Developer',url:'developer/csv-viewer.html',keys:['csv','view','table','data','developer'],ready:true},
  {id:'base64',name:'Base64 Encode / Decode',desc:'Encode or decode Base64 strings',cat:'Developer',url:'developer/base64.html',keys:['base64','encode','decode','developer','text'],ready:true},
  {id:'url-encode',name:'URL Encode / Decode',desc:'Encode or decode URL components',cat:'Developer',url:'developer/url-encode.html',keys:['url','encode','decode','percent','uri','developer'],ready:true},
  {id:'jwt-decoder',name:'JWT Decoder',desc:'Decode and inspect JWT tokens (does not verify signatures)',cat:'Developer',url:'developer/jwt-decoder.html',keys:['jwt','decode','token','json','web','developer'],ready:true},
  {id:'hash-generator',name:'Hash Generator',desc:'Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes',cat:'Developer',url:'developer/hashes.html',keys:['hash','sha','sha256','sha512','sha1','sha384','digest','developer','crypto'],ready:true},
  {id:'html-entities',name:'HTML Entities',desc:'Encode or decode HTML entities',cat:'Developer',url:'developer/html-entities.html',keys:['html','entities','encode','decode','escape','developer'],ready:true},
  {id:'unicode-inspector',name:'Unicode Inspector',desc:'Inspect Unicode code points in text',cat:'Developer',url:'developer/unicode.html',keys:['unicode','inspect','code point','character','developer'],ready:true},
  {id:'regex-tester',name:'Regex Tester',desc:'Test regular expressions against text',cat:'Developer',url:'developer/regex.html',keys:['regex','regular expression','test','match','developer'],ready:true},
  {id:'diff-checker',name:'Diff Checker',desc:'Compare two texts side by side',cat:'Developer',url:'developer/diff.html',keys:['diff','compare','text','difference','developer'],ready:true},

  // ── Security & Network ──
  {id:'password-generator',name:'Password Generator',desc:'Generate secure random passwords',cat:'Security',url:'generator/password.html',keys:['password','generate','random','secure','crypto','security'],ready:true},
  {id:'passphrase-generator',name:'Passphrase Generator',desc:'Generate memorable passphrases',cat:'Security',url:'generator/passphrase.html',keys:['passphrase','generate','words','diceware','security'],ready:true},
  {id:'password-entropy',name:'Password Entropy',desc:'Estimate password entropy and strength',cat:'Security',url:'security/entropy.html',keys:['password','entropy','strength','security','bits'],ready:true},
  {id:'random-string',name:'Random String Generator',desc:'Generate random strings with custom charset',cat:'Security',url:'generator/random-string.html',keys:['random','string','generate','characters','security'],ready:true},
  {id:'url-parser',name:'URL Parser',desc:'Parse and inspect URL components',cat:'Security',url:'network/url-parser.html',keys:['url','parse','hostname','path','query','fragment','network'],ready:true},
  {id:'subnet-calculator',name:'Subnet Calculator',desc:'Calculate IPv4 subnet details',cat:'Network',url:'network/subnet.html',keys:['subnet','ip','ipv4','cidr','network','mask','calculate'],ready:true},
  {id:'cidr-calculator',name:'CIDR Calculator',desc:'Calculate CIDR ranges and addresses',cat:'Network',url:'network/cidr.html',keys:['cidr','ip','range','network','calculate'],ready:true},
  {id:'ip-binary',name:'IP to Binary',desc:'Convert between IPv4 and binary',cat:'Network',url:'network/ip-binary.html',keys:['ip','binary','ipv4','convert','network'],ready:true},
  {id:'mac-formatter',name:'MAC Address Formatter',desc:'Format MAC addresses in various styles',cat:'Network',url:'network/mac.html',keys:['mac','address','format','network','ethernet'],ready:true},
  {id:'unix-permissions',name:'Unix Permissions Calculator',desc:'Calculate chmod numeric and symbolic permissions',cat:'Security',url:'security/permissions.html',keys:['unix','permissions','chmod','octal','rwx','linux','security'],ready:true},

  // ── Date & Time ──
  {id:'timestamp-converter',name:'Timestamp Converter',desc:'Convert between Unix timestamps and dates',cat:'Date & Time',url:'convert/timestamp.html',keys:['timestamp','unix','date','time','epoch','convert'],ready:true},
  
  
  
  
  
  

  // ── Numbers & Conversions ──
  {id:'number-base',name:'Number Base Converter',desc:'Convert between binary, decimal, hex, octal',cat:'Numbers',url:'convert/number-base.html',keys:['binary','decimal','hex','hexadecimal','octal','convert','base','number'],ready:true},
  {id:'percentage-calc',name:'Percentage Calculator',desc:'Calculate percentages',cat:'Numbers',url:'convert/percentage.html',keys:['percentage','percent','calculate','number'],ready:true},
  {id:'ratio-calc',name:'Ratio Calculator',desc:'Calculate and simplify ratios',cat:'Numbers',url:'convert/ratio.html',keys:['ratio','proportion','calculate','simplify','number'],ready:true},
  {id:'rule-of-three',name:'Rule of Three',desc:'Cross-multiplication solver',cat:'Numbers',url:'convert/rule-of-three.html',keys:['rule of three','cross multiply','proportion','calculate'],ready:true},
  {id:'statistics',name:'Basic Statistics',desc:'Mean, median, mode, standard deviation',cat:'Numbers',url:'convert/statistics.html',keys:['statistics','mean','median','mode','average','standard deviation','number'],ready:true},
  {id:'unit-converter',name:'Unit Converter',desc:'Convert length, mass, temperature, speed, storage and more',cat:'Numbers',url:'convert/units.html',keys:['unit','convert','length','mass','weight','temperature','speed','storage','area','volume','pressure','energy','meter','kilogram','fahrenheit','celsius'],ready:true},

  // ── Generators ──
  {id:'uuid-generator',name:'UUID Generator',desc:'Generate random UUIDs (v4)',cat:'Generators',url:'generator/uuid.html',keys:['uuid','generate','random','unique','id','guid'],ready:true},
  {id:'lorem-ipsum',name:'Lorem Ipsum Generator',desc:'Generate placeholder text',cat:'Generators',url:'generator/lorem.html',keys:['lorem','ipsum','placeholder','text','generate','dummy'],ready:true},
  {id:'fake-data',name:'Fake Data Generator',desc:'Generate fictitious data for development',cat:'Generators',url:'generator/fake-data.html',keys:['fake','data','generate','mock','test','development','name','email'],ready:true},
  {id:'gradient-generator',name:'Gradient Generator',desc:'Generate CSS gradient values',cat:'Generators',url:'generator/gradient.html',keys:['gradient','css','color','generate','linear','radial'],ready:true},

  // ── Colors ──
  {id:'hex-rgb',name:'HEX ↔ RGB Converter',desc:'Convert between HEX and RGB color formats',cat:'Colors',url:'color/hex-rgb.html',keys:['hex','rgb','color','convert'],ready:true},
  {id:'hsl-converter',name:'HSL Converter',desc:'Convert between HSL and RGB/HEX',cat:'Colors',url:'color/hsl.html',keys:['hsl','rgb','hex','color','convert'],ready:true},
  {id:'color-picker',name:'Color Picker',desc:'Pick a color and get its values',cat:'Colors',url:'color/picker.html',keys:['color','pick','select','hex','rgb','hsl'],ready:true},
  {id:'contrast-checker',name:'Contrast Checker',desc:'Check color contrast ratio for accessibility',cat:'Colors',url:'color/contrast.html',keys:['contrast','accessibility','wcag','color','ratio'],ready:true},
  {id:'palette-generator',name:'Palette Generator',desc:'Generate color palettes',cat:'Colors',url:'color/palette.html',keys:['palette','color','generate','scheme','harmony'],ready:true},
  {id:'random-color',name:'Random Color',desc:'Generate a random color',cat:'Colors',url:'color/random.html',keys:['random','color','generate','hex','rgb'],ready:true},

  // ── QR Codes ──
  {id:'qr-text',name:'Text to QR',desc:'Generate a QR code from text',cat:'QR Codes',url:'qr/text.html',keys:['qr','text','generate','code'],ready:true},
  {id:'qr-url',name:'URL to QR',desc:'Generate a QR code from a URL',cat:'QR Codes',url:'qr/url.html',keys:['qr','url','link','generate','code'],ready:true},
  {id:'qr-wifi',name:'WiFi to QR',desc:'Generate a QR code for WiFi credentials',cat:'QR Codes',url:'qr/wifi.html',keys:['qr','wifi','network','password','generate','code'],ready:true},
  {id:'qr-email',name:'Email to QR',desc:'Generate a QR code for an email address',cat:'QR Codes',url:'qr/email.html',keys:['qr','email','mailto','generate','code'],ready:true},
  {id:'qr-phone',name:'Phone to QR',desc:'Generate a QR code for a phone number',cat:'QR Codes',url:'qr/phone.html',keys:['qr','phone','tel','call','generate','code'],ready:true},
  {id:'qr-reader',name:'QR Reader',desc:'Read QR codes from images',cat:'QR Codes',url:'qr/reader.html',keys:['qr','read','scan','decode','image'],ready:true},

  // ── Files ──
  {id:'file-hash',name:'File Hash (SHA-256 / SHA-512)',desc:'Calculate SHA-256 or SHA-512 hash of a file',cat:'Files',url:'file/hash.html',keys:['file','hash','sha256','sha512','checksum','verify','integrity'],ready:true},
  {id:'file-sha512',name:'File SHA-512',desc:'Calculate SHA-512 hash of a file',cat:'Files',url:'file/sha512.html',keys:['file','sha512','hash','checksum'],ready:true},
  {id:'mime-info',name:'MIME Type Info',desc:'Detect file MIME type',cat:'Files',url:'file/mime.html',keys:['mime','type','file','detect','format'],ready:true},
  {id:'filename-cleaner',name:'Filename Cleaner',desc:'Clean and sanitize filenames',cat:'Files',url:'file/filename-cleaner.html',keys:['filename','clean','sanitize','rename','special characters'],ready:true},
  {id:'byte-converter',name:'Byte Size Converter',desc:'Convert between bytes, KB, MB, GB, TB',cat:'Files',url:'file/byte-converter.html',keys:['byte','size','convert','kb','mb','gb','tb','storage'],ready:true},
  {id:'file-to-base64',name:'File to Base64',desc:'Encode any file as a Base64 string',cat:'Files',url:'file/to-base64.html',keys:['file','base64','encode','convert'],ready:true},
  {id:'base64-to-file',name:'Base64 to File',desc:'Decode a Base64 string back to a file',cat:'Files',url:'file/from-base64.html',keys:['base64','file','decode','convert'],ready:true},
  {id:'file-inspector',name:'File Inspector',desc:'Inspect file headers and basic structure',cat:'Files',url:'file/inspector.html',keys:['file','inspect','header','hex','binary','structure'],ready:true},
  {id:'timezone-converter',name:'Timezone Converter',desc:'Convert times between timezones',cat:'Date & Time',url:'convert/timezone.html',keys:['timezone','time','convert','utc','gmt'],ready:true},
  {id:'date-difference',name:'Date Difference',desc:'Calculate the difference between two dates',cat:'Date & Time',url:'convert/date-diff.html',keys:['date','difference','days','between','calculate'],ready:true},
  {id:'age-calculator',name:'Age Calculator',desc:'Calculate age from birth date',cat:'Date & Time',url:'convert/age.html',keys:['age','birthday','birth','calculate','years'],ready:true},
  {id:'duration-calculator',name:'Duration Calculator',desc:'Calculate duration between times',cat:'Date & Time',url:'convert/duration.html',keys:['duration','time','calculate','hours','minutes'],ready:true},
  {id:'add-subtract-time',name:'Add / Subtract Time',desc:'Add or subtract time from a date',cat:'Date & Time',url:'convert/add-time.html',keys:['date','add','subtract','time','calculate'],ready:true},
  {id:'iso-converter',name:'ISO 8601 Converter',desc:'Convert to and from ISO 8601 format',cat:'Date & Time',url:'convert/iso.html',keys:['iso','8601','date','format','convert'],ready:true},
];
