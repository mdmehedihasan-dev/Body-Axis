import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExerciseContext } from '../../context/ExerciseContext';
import { X, PlusCircle, ChevronDown, Upload, FileText, Package } from 'lucide-react';

const AddExercise = () => {
  const navigate = useNavigate();
  const { addExercise, exercises } = useContext(ExerciseContext);

  const [formData, setFormData] = useState({
    name: 'Quadruped Thoracic Rotation',
    sets: '3',
    reps: '8 / side',
    primaryIntent: 'Restore thoracic rotation',
    secondaryBenefits: 'Reduce lumbar compensation',
    progression: 'Add load',
    regression: 'Reduce range',
    benefits: 'Gets your mid-back rotating the way it should, so your lower back and neck don\'t have to do the twisting for it.'
  });

  const [videoTutorial, setVideoTutorial] = useState(null);
  const [shortClip, setShortClip] = useState(null);

  const videoTutorialRef = useRef(null);
  const shortClipRef = useRef(null);

  const handleVideoChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'tutorial') setVideoTutorial(file);
      if (type === 'clip') setShortClip(file);
    }
  };

  const removeVideo = (e, type) => {
    e.stopPropagation();
    if (type === 'tutorial') {
      setVideoTutorial(null);
      if (videoTutorialRef.current) videoTutorialRef.current.value = '';
    }
    if (type === 'clip') {
      setShortClip(null);
      if (shortClipRef.current) shortClipRef.current.value = '';
    }
  };

  const [equipmentList, setEquipmentList] = useState([]);
  const [phaseList, setPhaseList] = useState(['Control']);
  const [targetAreaList, setTargetAreaList] = useState(['Shoulder', 'Neck', 'Upper Back', 'Middle Back']);
  const [userCaseList, setUserCaseList] = useState(['Feels Weak or Unstable', 'Stiff or Tight']);

  const [selectedEquipment, setSelectedEquipment] = useState('None');
  const [selectedPhase, setSelectedPhase] = useState('Control');
  const [selectedTargetArea, setSelectedTargetArea] = useState('Lower Back');
  const [selectedUserCase, setSelectedUserCase] = useState('Just Want to Move Better');

  const handleAddItem = (item, list, setList) => {
    if (item && item !== 'None' && !list.includes(item)) {
      setList([...list, item]);
    }
  };

  const handleRemoveItem = (item, list, setList) => {
    setList(list.filter(i => i !== item));
  };

  const handlePublish = () => {
    addExercise({
      name: formData.name,
      bodyAreas: ['Shoulder', 'Neck', 'Upper Back', 'Middle Back'],
      phases: ['Control'],
      equipment: <Package size={18} className="text-[#34D399]" />
    });
    navigate('/exercise-library');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen p-8 bg-[#0A0D14] text-white">
      <div className="max-w-[1200px] mx-auto animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
              EXERCISE LIBRARY <span className="mx-2 text-[#1E293B]">&gt;</span> <span className="text-[#38BDF8]">ADD NEW EXERCISE</span>
            </p>
            <h1 className="text-[28px] font-bold tracking-tight">Add New Exercise</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-[#3B82F6] hover:text-white text-[13px] font-bold transition-colors">
              Save Draft
            </button>
            <button 
              onClick={handlePublish}
              className="px-6 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-blue-600 transition-colors text-white text-[13px] font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Publish Exercise
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-[#38BDF8]" size={20} />
            <h2 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-[0.15em]">Exercise Metadata</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Input Row 1 */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">EXERCISE ID</label>
              <input 
                type="text" 
                value={`EX-26${(exercises.length + 1).toString().padStart(4, '0')}`}
                readOnly
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#64748B] outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">EXERCISE NAME</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>

            {/* Input Row 2 */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">SETS</label>
              <input 
                type="text" 
                name="sets"
                value={formData.sets}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">REPS</label>
              <input 
                type="text" 
                name="reps"
                value={formData.reps}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>

            {/* Input Row 3 */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">PRIMARY INTENT</label>
              <input 
                type="text" 
                name="primaryIntent"
                value={formData.primaryIntent}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">SECONDARY BENEFITS</label>
              <input 
                type="text" 
                name="secondaryBenefits"
                value={formData.secondaryBenefits}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>

            {/* Input Row 4 */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">PROGRESSION</label>
              <input 
                type="text" 
                name="progression"
                value={formData.progression}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">REGRESSION</label>
              <input 
                type="text" 
                name="regression"
                value={formData.regression}
                onChange={handleChange}
                className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-white outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>

            {/* Input Row 5: Equipment & Phase */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">EQUIPMENT NEEDED</label>
              <div className="relative flex gap-3 mb-4">
                <div className="relative flex-1">
                  <select 
                    value={selectedEquipment}
                    onChange={(e) => setSelectedEquipment(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#94A3B8] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer">
                    <option>None</option>
                    <option>Dumbbells</option>
                    <option>Kettlebells</option>
                    <option>Resistance Band</option>
                    <option>Barbell</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
                </div>
                <button 
                  onClick={() => handleAddItem(selectedEquipment, equipmentList, setEquipmentList)}
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl px-5 flex items-center gap-1.5 text-[12px] font-bold transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  Add <PlusCircle size={14} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {equipmentList.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#34D399] text-[#0A0D14] px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer hover:bg-[#10B981] transition-colors" onClick={() => handleRemoveItem(item, equipmentList, setEquipmentList)}>
                    {item} <X size={12} />
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">PHASE</label>
              <div className="relative flex gap-3 mb-4">
                <div className="relative flex-1">
                  <select 
                    value={selectedPhase}
                    onChange={(e) => setSelectedPhase(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#94A3B8] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer">
                    <option>Control</option>
                    <option>Capacity</option>
                    <option>Power</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
                </div>
                <button 
                  onClick={() => handleAddItem(selectedPhase, phaseList, setPhaseList)}
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl px-5 flex items-center gap-1.5 text-[12px] font-bold transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  Add <PlusCircle size={14} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {phaseList.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#34D399] text-[#0A0D14] px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer hover:bg-[#10B981] transition-colors" onClick={() => handleRemoveItem(item, phaseList, setPhaseList)}>
                    {item} <X size={12} />
                  </span>
                ))}
              </div>
            </div>

            {/* Input Row 6: Target Area & User Case */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">TARGET AREA</label>
              <div className="relative flex gap-3 mb-4">
                <div className="relative flex-1">
                  <select 
                    value={selectedTargetArea}
                    onChange={(e) => setSelectedTargetArea(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#94A3B8] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer">
                    <option>Lower Back</option>
                    <option>Shoulder</option>
                    <option>Neck</option>
                    <option>Upper Back</option>
                    <option>Middle Back</option>
                    <option>Hips</option>
                    <option>Knees</option>
                    <option>Ankles</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
                </div>
                <button 
                  onClick={() => handleAddItem(selectedTargetArea, targetAreaList, setTargetAreaList)}
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl px-5 flex items-center gap-1.5 text-[12px] font-bold transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  Add <PlusCircle size={14} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {targetAreaList.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#34D399] text-[#0A0D14] px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer hover:bg-[#10B981] transition-colors" onClick={() => handleRemoveItem(item, targetAreaList, setTargetAreaList)}>
                    {item} <X size={12} />
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">USER CASE</label>
              <div className="relative flex gap-3 mb-4">
                <div className="relative flex-1">
                  <select 
                    value={selectedUserCase}
                    onChange={(e) => setSelectedUserCase(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#94A3B8] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer">
                    <option>Just Want to Move Better</option>
                    <option>Feels Weak or Unstable</option>
                    <option>Stiff or Tight</option>
                    <option>Post-Rehab</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
                </div>
                <button 
                  onClick={() => handleAddItem(selectedUserCase, userCaseList, setUserCaseList)}
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl px-5 flex items-center gap-1.5 text-[12px] font-bold transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  Add <PlusCircle size={14} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {userCaseList.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#34D399] text-[#0A0D14] px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer hover:bg-[#10B981] transition-colors" onClick={() => handleRemoveItem(item, userCaseList, setUserCaseList)}>
                    {item} <X size={12} />
                  </span>
                ))}
              </div>
            </div>

            {/* Input Row 7: Video & Short Clip */}
            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">VIDEO TUTORIAL</label>
              <input 
                type="file" 
                accept="video/*" 
                ref={videoTutorialRef} 
                onChange={(e) => handleVideoChange(e, 'tutorial')} 
                className="hidden" 
              />
              <div 
                onClick={() => videoTutorialRef.current?.click()}
                className="w-full h-[140px] bg-[#0A0D14] border border-[#1E293B] rounded-xl flex flex-col items-center justify-center text-[#475569] cursor-pointer hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors relative"
              >
                {videoTutorial ? (
                  <>
                    <FileText size={24} className="mb-2 text-[#38BDF8]" />
                    <span className="text-[11px] font-bold text-[#38BDF8] px-4 text-center truncate w-full">{videoTutorial.name}</span>
                    <button 
                      onClick={(e) => removeVideo(e, 'tutorial')}
                      className="absolute top-2 right-2 text-[#64748B] hover:text-[#EF4444] p-1"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <Upload size={24} className="mb-2" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">ATTACHED VIDEO</span>
                  </>
                )}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">SHORT CLIP</label>
              <input 
                type="file" 
                accept="video/*" 
                ref={shortClipRef} 
                onChange={(e) => handleVideoChange(e, 'clip')} 
                className="hidden" 
              />
              <div 
                onClick={() => shortClipRef.current?.click()}
                className="w-full h-[140px] bg-[#0A0D14] border border-[#1E293B] rounded-xl flex flex-col items-center justify-center text-[#475569] cursor-pointer hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors relative"
              >
                {shortClip ? (
                  <>
                    <FileText size={24} className="mb-2 text-[#38BDF8]" />
                    <span className="text-[11px] font-bold text-[#38BDF8] px-4 text-center truncate w-full">{shortClip.name}</span>
                    <button 
                      onClick={(e) => removeVideo(e, 'clip')}
                      className="absolute top-2 right-2 text-[#64748B] hover:text-[#EF4444] p-1"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <Upload size={24} className="mb-2" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">ATTACHED VIDEO</span>
                  </>
                )}
              </div>
            </div>

            {/* Input Row 8: Benefits */}
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">BENEFITS</label>
              <textarea 
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                className="w-full h-[100px] bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-[13px] text-[#94A3B8] outline-none focus:border-[#38BDF8] transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExercise;
