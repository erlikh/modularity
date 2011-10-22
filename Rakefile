require 'closure-compiler'

desc "Compiles the demo JS files."
task :compile_demo, [:options] do |t, args|
  puts "Compiling demo files using advanced compression\n"

  framework_files = `find javascripts -type f -name "*.js" | grep -v "/uncompiled/" | grep -v "externs.js"`.split "\n"
  page_files = `find demo -type f -name "*.js"`.split "\n"
  externs_files = `find javascripts/externs -type f -name "*.externs.js"`.split "\n"  

  options = {
    :compilation_level => 'ADVANCED_OPTIMIZATIONS',
    :externs => externs_files,
    :js => framework_files + page_files,
    :jscomp_warning => 'strictModuleDepCheck',
    :jscomp_warning => 'missingProperties',
    :jscomp_warning => 'unknownDefines',
    :jscomp_error => 'checkTypes',
    :manage_closure_dependencies => 'true',
    :warning_level => 'VERBOSE'    
  }
  if args.options == 'pp'
    options[:formatting] = ['PRETTY_PRINT', 'PRINT_INPUT_DELIMITER']
  end
  
  closure = Closure::Compiler.new(options)
  puts closure.compile('')
end


begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
