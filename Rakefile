# Gems
require 'rake'
require 'haml'

# Set "rake compile" as default
task :default => :compile

# rake compile
desc "Compile the Haml files"
task :compile do
  Dir["#{Dir.pwd}/haml/*.haml"].each do |filename|
    base_filename  = File.basename(filename, ".haml")
    parsed_content = Haml::Engine.new(File.read(filename), :attr_wrapper => '"').render
    File.write("#{Dir.pwd}/html/#{base_filename}.html", parsed_content)
  end
end
