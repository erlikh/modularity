require 'closure-compiler'

desc "Compiles the JS files for demo 1."
task :compile_demo, [:options] do |t, args|
  puts "Compiling demo files using advanced compression.\n\n"

  # Find the different demos.
  demo_folders = `find demos -type d -name "demo_*"`.split "\n"
  demo_folders.each do |demo_folder|
    compile_demo demo_folder, args.options
  end
  puts "\nAll done.\n"
end


def compile_demo root, options
  print "Compiling #{root} ... " ; STDOUT.flush
  framework_files = ['javascripts/modularity.js']
  page_files = `find #{root}/src -type f -name "*.js"`.split "\n"
  externs_files = `find javascripts/externs -type f -name "*.externs.js"`.split "\n"  

  options = {
    :compilation_level => 'ADVANCED_OPTIMIZATIONS',
    :externs => externs_files,
    :js => framework_files + page_files,
    :js_output_file => "#{root}/output/compressed.js",
    :jscomp_warning => 'strictModuleDepCheck',
    :jscomp_warning => 'missingProperties',
    :jscomp_warning => 'unknownDefines',
    :jscomp_error => 'checkTypes',
    :manage_closure_dependencies => 'true',
    :warning_level => 'VERBOSE',
  }
  if options == 'pp'
    options[:formatting] = ['PRETTY_PRINT', 'PRINT_INPUT_DELIMITER']
  end
  
  closure = Closure::Compiler.new(options)
  puts closure.compile('')
end


begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
end
