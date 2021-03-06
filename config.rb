http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "imgs"
javascripts_dir = "js"
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
on_stylesheet_saved do |filename|
	if File.exists?(filename)
		minifyFile = filename.gsub('.css', '.min.css')
		FileUtils.cp filename, minifyFile
		file = File.read minifyFile
		colon = ':'
		semicolon = ';'
		comma = ','
		open_brace = ' {'
		close_brace = '}'
		file.gsub!(/\n/,' ')
		file.gsub!(/\/\*.*?\*\//m,'')
		file.gsub!(/\s*:\s*/,colon)
		file.gsub!(/\s*;\s*/,semicolon)
		file.gsub!(/\s*,\s*/,comma)
		file.gsub!(/\s*\{\s*/,open_brace)
		file.gsub!(/\s*\}\s*/,close_brace)
		file.gsub!(/\s\s+/,' ')
		File.open(minifyFile, 'w+') do |f|
			f << file
		end
	end
end


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
