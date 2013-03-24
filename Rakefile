# Gems
require 'rake'
require 'haml'

# Run compiling and hinting
task :default => [:compile, :hint]

# rake compile
desc "Compile the Haml files"
task :compile do
  Dir["haml/*.haml"].each do |filename|
    base_filename  = File.basename(filename, ".haml")
    parsed_content = Haml::Engine.new(File.read(filename), :attr_wrapper => '"').render
    File.write("html/#{base_filename}.html", parsed_content)
  end
end

# rake hint
desc "Run JSHint on the JS files"
task :hint do
  Dir["assets/js/*.js"].each do |file|
    system "jshint #{file}"
  end
end
