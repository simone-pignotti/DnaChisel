Search.setIndex({docnames:["examples/gen9_9mer_score_minimization","examples/pattern_instertion","examples/plasmid_optimization","index","ref/biotools","ref/builtin_specifications","ref/core_classes","ref/ref","ref/reports"],envversion:53,filenames:["examples/gen9_9mer_score_minimization.rst","examples/pattern_instertion.rst","examples/plasmid_optimization.rst","index.rst","ref/biotools.rst","ref/builtin_specifications.rst","ref/core_classes.rst","ref/ref.rst","ref/reports.rst"],objects:{"dnachisel.DnaOptimizationProblem":{all_constraints_pass:[6,1,1,""],constraints_evaluations:[6,1,1,""],initialize:[6,1,1,""],objectives_evaluations:[6,1,1,""],optimize:[6,1,1,""],optimize_by_exhaustive_search:[6,1,1,""],optimize_by_random_mutations:[6,1,1,""],optimize_with_report:[6,1,1,""],resolve_constraint:[6,1,1,""],resolve_constraints:[6,1,1,""],resolve_constraints_by_exhaustive_search:[6,1,1,""],resolve_constraints_by_random_mutations:[6,1,1,""],resolve_constraints_locally:[6,1,1,""]},"dnachisel.Location":{Location:[6,0,1,""],MultiLocation:[6,0,1,""]},"dnachisel.Location.Location":{extended:[6,1,1,""],extract_sequence:[6,1,1,""],from_biopython_location:[6,3,1,""],merge_overlapping_locations:[6,3,1,""],overlap_region:[6,1,1,""],to_biopython_feature:[6,1,1,""],to_biopython_location:[6,1,1,""],to_tuple:[6,1,1,""]},"dnachisel.MutationSpace":{MutationChoice:[6,0,1,""],MutationSpace:[6,0,1,""]},"dnachisel.MutationSpace.MutationChoice":{extract_varying_region:[6,1,1,""],percolate_with:[6,1,1,""],random_variant:[6,1,1,""]},"dnachisel.MutationSpace.MutationSpace":{all_variants:[6,1,1,""],apply_random_mutations:[6,1,1,""],choices_span:[6,4,1,""],constrain_sequence:[6,1,1,""],from_optimization_problem:[6,3,1,""],localized:[6,1,1,""],pick_random_mutations:[6,1,1,""],space_size:[6,4,1,""]},"dnachisel.SequencePattern":{DnaNotationPattern:[6,0,1,""],EnzymeSitePattern:[6,0,1,""],HomopolymerPattern:[6,0,1,""],RepeatedKmerPattern:[6,0,1,""],SequencePattern:[6,0,1,""]},"dnachisel.SequencePattern.DnaNotationPattern":{all_variants:[6,1,1,""],dna_sequence_to_regexpr:[6,3,1,""]},"dnachisel.SequencePattern.EnzymeSitePattern":{from_string:[6,3,1,""]},"dnachisel.SequencePattern.SequencePattern":{find_matches:[6,1,1,""]},"dnachisel.SpecEvaluation":{ProblemConstraintsEvaluations:[6,0,1,""],ProblemObjectivesEvaluations:[6,0,1,""],SpecEvaluation:[6,0,1,""],SpecEvaluations:[6,0,1,""]},"dnachisel.SpecEvaluation.ProblemConstraintsEvaluations":{from_problem:[6,3,1,""],success_failure_color:[6,1,1,""],text_summary_message:[6,1,1,""]},"dnachisel.SpecEvaluation.ProblemObjectivesEvaluations":{from_problem:[6,3,1,""],success_failure_color:[6,1,1,""],text_summary_message:[6,1,1,""]},"dnachisel.SpecEvaluation.SpecEvaluation":{default_message:[6,4,1,""],locations_to_biopython_features:[6,1,1,""],to_text:[6,1,1,""]},"dnachisel.SpecEvaluation.SpecEvaluations":{all_evaluations_pass:[6,1,1,""],evaluations_with_locations:[6,1,1,""],filter:[6,1,1,""],locations_as_features:[6,1,1,""],scores_sum:[6,1,1,""],success_and_failures_as_features:[6,1,1,""],to_text:[6,1,1,""]},"dnachisel.Specification":{copy_with_changes:[6,1,1,""],from_biopython_feature:[6,3,1,""],initialize_on_problem:[6,1,1,""],localized:[6,1,1,""],restrict_nucleotides:[6,1,1,""],to_biopython_feature:[6,1,1,""]},"dnachisel.biotools":{biotools:[4,2,0,"-"],features_annotations:[4,2,0,"-"]},"dnachisel.biotools.biotools":{all_iupac_variants:[4,5,1,""],blast_sequence:[4,5,1,""],change_biopython_record_sequence:[4,5,1,""],codons_frequencies_and_positions:[4,5,1,""],complement:[4,5,1,""],dna_pattern_to_regexpr:[4,5,1,""],find_specification_in_feature:[4,5,1,""],gc_content:[4,5,1,""],group_nearby_indices:[4,5,1,""],group_nearby_segments:[4,5,1,""],is_palyndromic:[4,5,1,""],list_common_enzymes:[4,5,1,""],load_record:[4,5,1,""],random_dna_sequence:[4,5,1,""],random_protein_sequence:[4,5,1,""],reverse_complement:[4,5,1,""],reverse_translate:[4,5,1,""],sequence_to_biopython_record:[4,5,1,""],sequences_differences:[4,5,1,""],sequences_differences_array:[4,5,1,""],sequences_differences_segments:[4,5,1,""],subdivide_window:[4,5,1,""],translate:[4,5,1,""],windows_overlap:[4,5,1,""]},"dnachisel.biotools.features_annotations":{annotate_differences:[4,5,1,""],annotate_pattern_occurrences:[4,5,1,""],annotate_record:[4,5,1,""]},"dnachisel.builtin_specifications":{AllowPrimer:[5,0,1,""],AvoidBlastMatches:[5,0,1,""],AvoidChanges:[5,0,1,""],AvoidHairpins:[5,0,1,""],AvoidNonUniqueSegments:[5,0,1,""],AvoidPattern:[5,0,1,""],AvoidStopCodons:[5,0,1,""],CodonOptimize:[5,0,1,""],EnforceGCContent:[5,0,1,""],EnforcePatternOccurence:[5,0,1,""],EnforceRegionsCompatibility:[5,0,1,""],EnforceSequence:[5,0,1,""],EnforceTranslation:[5,0,1,""],SequenceLengthBounds:[5,0,1,""]},"dnachisel.reports":{optimization_reports:[8,2,0,"-"]},"dnachisel.reports.optimization_reports":{SpecAnnotationsTranslator:[8,0,1,""],write_no_solution_report:[8,5,1,""],write_optimization_report:[8,5,1,""]},"dnachisel.reports.optimization_reports.SpecAnnotationsTranslator":{compute_filtered_features:[8,1,1,""]},dnachisel:{DnaOptimizationProblem:[6,0,1,""],Location:[6,2,0,"-"],MutationSpace:[6,2,0,"-"],SequencePattern:[6,2,0,"-"],SpecEvaluation:[6,2,0,"-"],Specification:[6,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:staticmethod","4":"py:attribute","5":"py:function"},terms:{"02f":0,"3x2mer":6,"3x4mer":6,"50bp":3,"5x2mer":6,"60f979":6,"6xa":6,"7xa":6,"9mer":0,"9xc":6,"break":5,"case":[4,5,6,8],"class":[0,5,7,8],"default":[4,5,6,8],"float":6,"function":6,"import":[0,3,5,6],"long":[5,6],"new":[0,3,4,5,6],"return":[0,4,6,8],"short":6,"static":6,"true":[0,4,5,6],"while":3,But:5,For:[4,5,6],IIs:[],NOT:4,One:0,THAT:3,THE:3,The:[0,3,4,5,6,8],These:[0,5,6],Use:6,Uses:[4,5],WITH:3,With:6,__str__:0,aaa:4,aaaa:6,aaaaaa:[],aaaaaaa:6,aaaaatg:6,aaatgtg:6,aag:4,aatg:6,abl:[3,5],about:6,abov:5,absent:5,acacacacac:[],acc:6,accept:[0,4,5,6],account:6,achiev:3,acid:[4,5],act:6,actual:6,add:4,added:[4,6],advanc:3,afraid:5,after:[0,6],again:8,against:4,ages:8,agt:6,algorithm:5,align:[4,5],all:[4,6],all_9mer:0,all_constraints_pass:6,all_evaluations_pass:6,all_iupac_vari:4,all_objectives_scor:6,all_vari:6,allow:[3,4,5,6],allowprim:5,along:[],also:[0,3,4,5,6],altern:[3,5],alwai:[4,5],ambigu:4,amino:[4,5],analys:4,ani:[5,6],anneal:5,annka:6,annot:[6,7,8],annotate_differ:4,annotate_pattern_occurr:4,annotate_record:4,anoth:[],ansd:6,anti:6,antisens:5,anywai:[],anywher:5,appear:[5,8],append:[],appli:[5,6],applic:3,apply_random_mut:6,arbitrari:[],archiv:[6,8],argument:6,around:[6,8],arrai:4,as_text:6,assembl:0,associ:[4,6],assum:5,ata:[4,6],atg:[4,6],atgaatg:6,atgc:[4,5,6],atgccg:4,atgcgtg:6,atgcgtgtgtgc:6,atgctgtgc:4,atggcgt:4,att:[4,6],attach:6,attcgcgtyttkwnaa:5,attgcca:6,attgtgcgtgtgtgcgt:4,attgtgta:6,attnn:4,attribut:[4,6],auto:[4,6],autom:3,averag:[],avoid:[0,5],avoid_heterodim_with:5,avoidblastmatch:5,avoidchang:5,avoided_repeat:5,avoidhairpin:5,avoidnonuniqueseg:5,avoidpattern:[3,5,6],avoidstopcodon:5,axes:[],axi:[],b_subtili:5,bacteri:4,bar:6,base:[0,4,6],basepair:6,basic:3,becaus:6,becom:6,befor:[0,6],begin:5,being:6,belong:6,below:6,best_codon:5,between:[3,4,5,6],bewar:6,bigger:5,biolog:3,biopythn:[],biopython:[4,6],biotool:7,blast:[4,5],blast_db:[4,5],blast_record:4,blast_sequ:4,blastdb:4,boost:[5,6],both:[4,5,6],bound:5,breach:6,bring:5,bsai:[3,6],bsai_sit:3,bsmbi:6,bsmbi_sit:6,built:7,builtin_specif:5,c_elegan:5,call:0,can:[0,3,4,5,6],cannot:6,canva:6,carri:[6,8],cbf960:6,cct:[],celciu:5,center:5,central:6,cerevisia:[],certain:5,certainli:0,chang:5,change_biopython_record_sequ:4,charact:6,check:[3,5,6],chisel:0,choic:6,choices_index:6,choices_span:6,clash:6,close:5,code:[0,3,5],codon:[3,4,5,6],codon_usage_t:5,codonoptim:[3,5],codonoptimizationspecif:5,codons_frequ:4,codons_frequencies_and_posit:4,codons_posit:4,codons_sequ:5,codons_transl:5,coli:[3,5],collect:[0,6],color:6,colors_dict:6,come:3,common:[3,4,6],compani:0,compar:4,compat:[5,6],compatibility_condit:5,complement:[4,5,6],complet:6,complex:[3,6],compris:8,comput:[4,6,8],compute_filtered_featur:8,concern:6,condition_label:5,conduct:5,connect:5,consecut:4,consid:[4,5,6],consol:6,constrain:5,constrain_sequ:6,constraint1:6,constraint2:6,constraint:[0,3,4,5,6,8],constraintevalu:6,constraints_evalu:[6,8],constraints_report:[],constraints_summari:5,constraints_text_summari:[0,3,6],contain:[6,8],containt:6,content:[3,4,5,6],contraint:5,contribut:3,convert:6,coordin:[4,5],copi:6,copy_with_chang:6,core:[5,7],correspond:[5,6],could:6,count:0,counter:0,coupl:[4,6],cpu:5,creat:[0,6,8],crop:[],crop_end:[],crop_record:[],crop_start:[],ctc:4,ctg:6,culling_limit:[4,5],current:6,custom:[3,6],cycl:6,d_melanogast:5,data:[4,6,8],databas:[4,5],def:0,default_messag:6,defin:[0,3,5,6],definit:[],degener:5,densiti:0,depend:[4,7],design:3,desir:5,destroi:6,detail:6,determin:6,determinist:4,dict:[4,5],dictionari:[],dictionnari:[4,5,6],differ:[4,5,6],dimer:6,direct:6,directori:8,discard:[],disjoint:6,displai:[6,8],dist:4,divis:4,dna:[0,4,5,6,8],dna_features_view:3,dna_pattern:[4,5],dna_pattern_to_regexpr:4,dna_sequ:4,dna_sequence_to_regexpr:6,dnachisel:[0,3,4,5,6,8],dnanotationpattern:[5,6],dnaoptimizationproblem:[0,3,5,7,8],dnapattern:4,doc:4,document:[],doesn:5,done:4,download:5,draw:6,drawn:[],due:[],dure:6,dust:4,e_coli:[3,5],e_valu:[4,5],each:[4,5,6],easi:3,easili:6,ecoli:4,ecoli_db:5,edinburg:3,edinburgh:3,edit:[5,8],effect:[5,6],either:[4,5,6,8],elegan:[],element:4,els:[0,4,5,6],elsewher:5,emploi:6,enabl:[4,5,6],encod:5,end1:[4,6],end2:[4,6],end:[4,5,6],enforc:5,enforcegccont:[3,5,6],enforcepatternoccur:[5,6],enforceregionscompat:5,enforcesequ:5,enforcetransl:[0,5],ensur:5,entir:6,enzym:[4,5,6],enzymat:6,enzyme_:[],enzyme_nam:6,enzyme_pattern:6,enzymesitepattern:6,equal:4,equiprob:4,equival:6,error:8,etc:[4,6],eval_filt:6,evalu:[0,6,8],evaluation_result:6,evaluation_scor:6,evaluations_with_loc:6,everi:3,everyon:3,exact:5,exampl:[0,4,5,6],exclus:3,exhaust:6,exist:5,exot:[4,5],explain:[],explicit:6,explor:6,express:[4,6],extend:[5,6],extended_loc:5,extens:5,extension_length:6,extern:5,extra:[4,6],extract:6,extract_sequ:6,extract_varying_region:6,extrem:[],f96c60:6,f9a260:6,factor:[5,6],fail:6,failed_onli:0,failur:6,fals:[4,6],fasta:4,featur:[0,6,7,8],feature_typ:[4,6],featureloc:6,features_annot:4,features_filt:8,features_properti:8,features_suffix:[],features_typ:6,feed:4,few:6,field:4,figur:8,figure_width:8,file:[6,8],filenam:4,filter:6,final_check:6,find:[4,6],find_match:6,find_specification_in_featur:4,first:[4,6],fix:6,flank:6,fmt:4,folder:[3,6,8],follow:[],form:[4,5,6],found:[4,6,8],foundri:3,frame:[3,5],frequenc:[4,5],frequent:5,from:[0,3,4,5,6,8],from_biopython_featur:6,from_biopython_loc:6,from_optimization_problem:6,from_problem:6,from_str:6,full:[4,7],gc_content:4,gc_share:4,gccgta:4,gccontentspecif:5,gcnnkta:6,gct:6,gen9:0,genbank:[4,6,8],gene:[3,5],gener:[3,4,6,8],genet:4,genom:3,get:6,ggtctc:[],github:3,give:[5,6],given:[4,5,6],global:[4,5,6,8],govern:6,group:4,group_nearby_indic:4,group_nearby_seg:4,gta:6,gtatacc:6,gtatatg:6,gtt:6,guidelin:5,h_sapien:5,hairpin:5,hairpin_window:5,handl:6,happen:5,harmon:5,has:[5,6],have:[5,6],here:[3,4],heterodimer:5,heurist:6,highest:6,highlight:[],hit:4,homolog:5,homopolym:6,homopolymer_pattern:[],homopolymerpattern:6,how:0,hsp:4,html:4,htoc25:4,http:4,i_1:4,i_2:4,i_n:4,ident:[4,5],idt:5,iff:6,imped:0,implement:[3,5,6],improv:6,in_both_strand:6,inch:8,includ:6,include_reverse_compl:5,inclus:3,incompat:[6,8],indent:6,index:6,indic:[4,5,6],info:6,initi:[5,6],initialize_on_problem:6,insert:[3,5],insid:6,instanc:[4,5,6],instead:[5,6],integ:4,interest:[],intern:5,internet:5,interpret:0,introduc:5,invok:6,is_any_nucleotid:6,is_palyndrom:4,item:0,iter:6,iter_mutations_spac:6,its:[4,6],iupac_sequ:4,just:5,keyword:6,kind:5,kmer:5,kmer_siz:6,know:6,known:[4,6],kwarg:6,label:[4,6],label_prefix:6,larg:3,larger:[4,6],largest:4,latter:[],least:[],left:[5,6],left_pad:6,legaci:5,len:[0,4],length:[4,5],librari:3,licenc:3,like:[4,6],limit:8,line:6,linear:4,list1:6,list2:6,list:[4,5,6],list_common_enzym:4,load:4,load_record:4,local:[4,5,6,8],localization_data:5,locat:[0,3,4,5,7,8],location1:6,location2:6,locations_as_featur:6,locations_to_biopython_featur:6,logger:6,look:[5,6],lookahead:6,loop:6,lower:5,lower_limit:6,lowest:6,mai:[5,6,8],make:[3,5,6],makeblastdb:5,manufactur:[],map:6,margin:4,mark:4,match:[5,6],matplotlib:[],max:5,max_features_in_plot:8,max_gap:4,max_group_spread:4,max_heterodim_tm:5,max_homology_length:5,max_it:6,max_length:5,max_span:4,max_start_gap:4,max_start_spread:4,maxi:[3,5],maxim:[4,5,6],maximize_all_objectives_one_by_on:6,maximum:5,mayb:6,mean:5,meet:[3,6],melanogast:[],melt:5,memori:[6,8],mer:5,merge_overlap:6,merge_overlapping_loc:6,mergin:6,messag:[0,6,8],method:[4,5,6,8],middl:4,min_align_length:5,min_length:5,min_suppli:4,mini:[3,5],minim:[4,5],minimizeninemersscor:0,minimum:[4,5],misann:[],misc:[],misc_featur:[4,6],mky:5,mlkyqt:4,mnqtw:4,mode:5,modif:6,modifi:[3,6],modul:6,moment:[4,5],more:[3,4,5,6,8],most:[4,5,6,8],mostli:[],much:[0,3],multi:[5,6],multiloc:6,multipl:[5,6],multipli:6,must:[4,5,6],mutat:[5,6],mutation_spac:6,mutationchoic:6,mutationspac:7,mutchoic:6,mute:6,mutipl:6,n_mutat:6,n_repeat:6,name:[4,5,6,8],nameofspec:6,nameofspecif:6,ncbi:[4,5],nearbi:5,necessari:6,need:6,neither:5,new_constraint:6,new_seq:4,new_spec:6,nightmar:0,ninem:0,non:0,none:[4,5,6,8],nosolutionerror:[6,8],notabl:6,notat:6,note:[4,5,6],now:5,nucleotid:[0,3,4,5,6],num_align:[4,5],num_thread:[4,5],number:[4,5,6,8],number_of_non_unique_9m:0,object:[0,3,4,5,6,8],objective1:6,objective2:6,objectives_evalu:[6,8],objectives_summari:6,objectives_text_summari:[0,3],objet:5,obtain:[5,6],occur:[4,5],oligo:0,omit:5,onc:0,one:[4,6],onli:[5,6],open:3,oper:6,opt_temp:4,optim:[0,3,4,5,6,8],optimis:5,optimization_report:8,optimization_with_report:[],optimizationproblem:5,optimize_by_exhaustive_search:6,optimize_by_random_mut:6,optimize_with_report:6,option:[4,6],order:0,orf:4,org:4,organ:3,orient:6,origin:[3,4,6],other:[5,6],other_loc:6,out:[],over:[5,6],overlap:[4,6],overlap_region:6,own:[],pair:[5,6],palyndrom:6,paramet:[4,5,6,8],pars:6,parser:[],part:[0,5],particular:[3,5,6],pass:[3,6],path:[5,6,8],pattern:[3,4,5,6],pcr:5,pdf:[6,8],perc_ident:[4,5],percent:5,percentag:5,percol:6,percolate_with:6,perfect:5,perform:6,pick_random_mut:6,pip:3,place:4,plain:6,plasmid:3,plot:[3,8],plot_constraint_breach:[],plot_gc_content_breach:[],plot_sequence_manufacturability_difficulti:[],polici:5,posit:[3,4,5,6],possibl:[4,5,6],possible_mut:6,practic:5,precomput:8,predefin:6,prefix:[4,6],presenc:[],present:0,preserv:3,previou:6,primer:5,print:[0,3,4,5,6],print_objectives_summari:6,priorit:5,proba:4,problem:[0,3,5,6,8],problemconstraintsevalu:6,problemobjectivesevalu:6,profil:[],proglog:6,progress:6,project:[3,6,8],project_nam:[6,8],prop:6,properti:[5,6],proport:[4,5],protein:[4,5],protein_sequ:4,provid:[3,4,5,6,8],pun:0,purpos:[5,6],python:[3,6],python_codon_t:5,qualifi:[4,6],quasi:5,quit:5,random:[3,4,6],random_dna_sequ:[3,4,5],random_protein_sequ:[0,4],random_vari:6,randomli:6,rang:[0,3,4,6],rather:5,raw:[6,8],reach:6,read:[3,5,6],readi:4,realli:5,recogn:4,record:4,red:6,refer:4,refus:0,region:6,regist:4,regular:[4,6],rel:[5,6],releas:3,relev:6,repeat:[5,6],repeated_km:[],repeatedkmerpattern:6,replac:[5,6],report:[3,6,7],repres:[5,6],represent:[0,6],reproduc:4,requir:5,research:5,resolv:6,resolve_constraint:[3,6],resolve_constraints_by_exhaustive_search:6,resolve_constraints_by_random_mut:6,resolve_constraints_loc:6,resolve_constraints_one_by_on:6,respect:[3,6],respons:6,rest:5,restrict:6,restrict_nucleotid:6,result:[4,6],revers:[4,5,6],reverse_compl:4,reverse_transl:[0,4],rid:3,right:[5,6],role:6,row:5,rscu:5,run:3,s_cerevisia:5,same:[4,6],sanger:5,sapien:[],satisfi:5,scope:6,score:[0,6],scores_sum:6,script:0,search:[5,6],see:[4,6],seed:4,segment:[4,5,6],select:4,self:[0,5,6],sens:6,separ:6,seq1:4,seq2:4,seqfeatur:6,seqrecord:4,sequenc:[0,3,4,5,6,8],sequence_length:[],sequence_to_biopython_record:4,sequencelengthbound:5,sequencepattern:[4,5,7],sequences_differ:4,sequences_differences_arrai:4,sequences_differences_seg:4,seri:[],serv:[],set:[3,4,6],setup:3,sever:[5,6],shorthand:6,shoul:6,should:[0,4,5,6,8],show:0,show_feature_label:[],show_loc:[],shown:[],side:[4,5,6],similar:6,simpli:5,singl:6,site:[3,4,6],site_length:4,site_unlik:4,size:[4,5,6],slide:[4,5],smaller:4,smallest:4,softwar:3,solut:6,solv:[3,5,6,8],solver_paramet:6,some:[3,5,6],somewher:0,sourc:[3,4,5,6,8],space:[5,6],space_s:6,span:[4,6],spec:6,specannotationstransl:8,specclass:[],specevalu:[0,7],speci:[3,5],special:6,speciess:[],specif:[0,3,4,7],specifi:[4,5,6],specifications_dict:6,specnam:[],speed:[4,6],splice:6,stage:0,stand:5,standard:5,start1:[4,6],start2:[4,6],start:[4,5,6],statu:[0,6],stem:5,stem_siz:5,stochast:6,stop:[4,5,6],store:6,str:6,strand:[4,5,6],string:[0,4,5,6],structur:6,sub:[5,6],subclass:6,subdivid:4,subdivide_window:4,subject:4,subject_sequ:4,submethod:6,suboptim:6,subregion:5,subseg:5,subsequ:[5,6],subset:6,subtili:[],success:6,success_and_failures_as_featur:6,success_failure_color:6,sudo:3,suffix:[],suitabl:3,sum:[0,6],summari:[3,6,7,8],superior:6,supplier:4,support:[5,6],sure:5,symbol:6,synonym:5,synthesi:0,taa:5,tabl:[4,5],tac:[],tacggc:4,take:8,taken:6,target:[5,6,8],target_sequ:5,taxid:5,temperatur:[4,5],test:5,text_summary_messag:6,tga:5,tgaa:6,tgcg:6,than:[3,5],thei:[0,5,6,8],them:0,thi:[0,3,4,5,6],thousand:8,thread:5,through:[3,6],thrown:6,thu:4,time:[0,5,6],titl:[],tmax:5,tmin:5,to_biopython_featur:6,to_biopython_loc:6,to_text:6,to_tupl:6,todo:6,too:[0,6],total:[4,6],toward:6,tqdm:6,translat:[4,5,8],translation_t:4,triplet:[5,6],tta:6,ttc:6,ttt:6,ttttt:6,tupl:5,tutori:4,tweet:3,twin:[],two:[4,6],type:[3,4,6],unambigu:4,unchang:5,uncommon:5,under:[3,5],ungap:[4,5],uniqu:[0,5],unknown:4,unless:[5,6],unnam:[4,8],unzip:3,upon:0,upper:[4,6],upper_limit:6,usag:5,use:[0,5,6],use_megablast:4,used:[3,4,5,6],useful:[5,6],user:[0,3],using:[5,6],valid:4,valu:[4,6],vari:6,variabl:[5,6],variant:6,variou:5,veri:3,verifi:5,version:[4,6],via:6,viewer:8,voidspecif:[],want:5,warn:6,weasyprint:3,web:5,welcom:3,well:[3,6],were:6,what:6,when:[4,5,6],where:[0,4,5,6],whether:6,which:[0,4,5,6],who:0,whole:[5,6],whose:6,wider:8,width:8,window1:4,window2:4,window:[3,4,5,6],window_s:4,windows_overlap:4,with_specif:6,won:[],word:5,word_siz:[4,5],work:[5,8],wrap:6,write:[6,8],write_no_solution_report:8,write_optimization_report:8,written:3,you:[3,5],zip:[6,8],zip_data:6,zulko:3},titles:["Minimization of the number of repeated kmers","Pattern insertion in a DNA sequence","Plasmid optimization with DnaChisel","DNA Chisel","Biotools","Built-in Specifications","Core Classes","DnaChisel Reference manual","Reports"],titleterms:{"class":6,annot:4,biotool:4,built:5,chisel:3,core:6,depend:6,dna:[1,3],dnachisel:[2,7],dnaoptimizationproblem:6,exampl:3,featur:4,full:5,insert:1,instal:3,kmer:0,licens:3,locat:6,manual:7,minim:0,mit:3,mutationspac:6,number:0,optim:2,pattern:1,plasmid:2,refer:[5,7],repeat:0,report:8,sequenc:1,sequencepattern:6,specevalu:6,specif:[5,6],summari:5,use:3}})